// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all menu items and sections
document.querySelectorAll('.menu-item, .feature, .review-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add haptic feedback for buttons (if supported)
const addHapticFeedback = (element) => {
    element.addEventListener('touchstart', () => {
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
};

// Add haptic to all interactive elements
document.querySelectorAll('.btn-call, .btn-whatsapp, .menu-item, .btn-directions, .contact-card').forEach(el => {
    addHapticFeedback(el);
});

// Hide scroll indicator after first scroll
let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 100) {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
            hasScrolled = true;
        }
    }
});

// Prevent zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Anna Bhel website loaded successfully! 🌟');

// Ensure only one video plays at a time
// Ensure only one video plays at a time
// Video Gallery Logic: Auto-scroll + Single Video Playback
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    const scroller = document.querySelector('.video-scroller');
    let autoScrollInterval;
    let isUserInteracting = false;

    console.log(`Found ${videos.length} videos`);

    // --- Auto Scroll Logic ---
    const startAutoScroll = () => {
        if (autoScrollInterval) clearInterval(autoScrollInterval);

        autoScrollInterval = setInterval(() => {
            if (isUserInteracting) return;

            // Don't scroll if any video is actually playing
            const isVideoPlaying = Array.from(videos).some(v => !v.paused);
            if (isVideoPlaying) return;

            // Scroll width calculation
            const firstItem = scroller.querySelector('.video-item');
            if (!firstItem) return;

            const itemWidth = firstItem.offsetWidth + 15; // Width + gap
            const maxScroll = scroller.scrollWidth - scroller.clientWidth;

            if (scroller.scrollLeft >= maxScroll - 10) {
                scroller.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scroller.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds interval
    };

    // Pause auto-scroll on interaction
    scroller.addEventListener('touchstart', () => { isUserInteracting = true; });
    scroller.addEventListener('touchend', () => {
        setTimeout(() => { isUserInteracting = false; }, 4000);
    });
    scroller.addEventListener('mouseenter', () => { isUserInteracting = true; });
    scroller.addEventListener('mouseleave', () => { isUserInteracting = false; });

    // --- Video Playback Logic ---
    videos.forEach((video, index) => {
        video.addEventListener('playing', () => {
            console.log(`Video ${index} started playing`);
            isUserInteracting = true; // Stop scrolling when video plays

            // Pause others
            videos.forEach((otherVideo, otherIndex) => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });

        video.addEventListener('pause', () => {
            // Delay to allow 'playing' event of another video to fire if switching
            setTimeout(() => {
                const isAnyPlaying = Array.from(videos).some(v => !v.paused);
                if (!isAnyPlaying) isUserInteracting = false;
            }, 1000);
        });

        video.addEventListener('ended', () => {
            isUserInteracting = false;
        });
    });

    // Start
    startAutoScroll();
});

// ===== Language Toggle Button =====
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');

    // Language cycle order
    const languages = [
        { code: 'mr', name: 'मराठी' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'en', name: 'English' }
    ];

    // Default language is Marathi
    const DEFAULT_LANG = 'mr';
    let currentLangIndex = 0;

    // Load saved language or use default
    const savedLang = localStorage.getItem('language') || DEFAULT_LANG;
    currentLangIndex = languages.findIndex(l => l.code === savedLang);
    if (currentLangIndex === -1) currentLangIndex = 0;

    // Function to change language
    function setLanguage(langCode) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[langCode] && translations[langCode][key]) {
                // Handle innerHTML for elements that might have HTML (like <br> tags)
                if (key === 'address_text') {
                    element.innerHTML = translations[langCode][key];
                } else {
                    element.textContent = translations[langCode][key];
                }
            }
        });

        // Save to localStorage
        localStorage.setItem('language', langCode);

        console.log(`Language changed to: ${langCode}`);
    }

    // Toggle button click handler
    langToggle.addEventListener('click', () => {
        // Cycle to next language
        currentLangIndex = (currentLangIndex + 1) % languages.length;
        const newLang = languages[currentLangIndex];

        // Update button text
        langText.textContent = newLang.name;

        // Change language
        setLanguage(newLang.code);

        // Haptic feedback
        if (navigator.vibrate) navigator.vibrate(10);
    });

    // Initialize with saved language
    langText.textContent = languages[currentLangIndex].name;
    setLanguage(languages[currentLangIndex].code);

    // Auto-hide functionality
    let hideTimer;
    let isScrolling = false;

    function showButton() {
        langToggle.classList.remove('hidden');
        clearTimeout(hideTimer);

        // Hide after 3 seconds of no activity
        hideTimer = setTimeout(() => {
            if (!isScrolling) {
                langToggle.classList.add('hidden');
            }
        }, 3000);
    }

    function hideButton() {
        langToggle.classList.add('hidden');
        clearTimeout(hideTimer);
    }

    // Show button on page load
    showButton();

    // Handle scroll events
    let scrollTimer;
    window.addEventListener('scroll', () => {
        isScrolling = true;
        hideButton(); // Hide immediately when scrolling

        // Clear previous timer
        clearTimeout(scrollTimer);

        // After scrolling stops, show button and start hide timer
        scrollTimer = setTimeout(() => {
            isScrolling = false;
            showButton();
        }, 150); // Wait 150ms after scroll stops
    });

    // Show button when clicked
    langToggle.addEventListener('click', () => {
        showButton(); // Reset hide timer on click
    });

    // Add pulse animation on first load (only once)
    setTimeout(() => {
        langToggle.classList.add('pulse');
        setTimeout(() => langToggle.classList.remove('pulse'), 6000);
    }, 1000);
});
