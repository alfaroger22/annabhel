# 🍲 Anna Bhel - The Real Taste

A modern, mobile-first website for Anna Bhel, a street food vendor specializing in authentic bhel in Pimpri-Chinchwad, Maharashtra.

## ✨ Features

### 🎨 Design
- **Mobile-First**: Optimized for mobile devices with max-width 480px
- **Premium UI**: Vibrant gradients, smooth animations, and modern aesthetics
- **Grid Background**: Subtle grid pattern for visual depth
- **Responsive**: Perfect mobile experience with touch-optimized interactions

### 🎬 Interactive Elements
- **Video Gallery**: Auto-scrolling video showcase with smooth transitions
- **Single Video Playback**: Only one video plays audio at a time
- **Haptic Feedback**: Vibration feedback on button interactions (mobile)
- **Scroll Animations**: Fade-in effects for sections as you scroll

### 🌐 Multi-Language Support
Three fully supported languages:
- **मराठी (Marathi)** - Default
- **हिंदी (Hindi)**
- **English**

**Language Toggle Button**: Fixed button at top-right corner that cycles through languages with a single tap

### ⚡ Interactive Features
- **Video Gallery**: Auto-scrolling video showcase with smooth transitions

- **HTML5**: Semantic markup with data attributes for i18n
- **CSS3**: Modern gradients, animations, and grid layouts
- **Vanilla JavaScript**: No frameworks - pure JS for performance
- **Google Fonts**: Poppins & Yatra One for typography
- **Font Awesome**: Icon library for UI elements

## 📁 File Structure

```
anna-bhel/
├── index.html          # Main HTML file with data-i18n attributes
├── style.css           # Complete styling including admin panel
├── script.js           # Interactive features & language switching
├── translations.js     # Translation data (mr, hi, en)
├── logo.png            # Anna Bhel logo
├── *.mp4              # Video gallery files
└── README.md          # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository

2. **Start a local server**:
   ```bash
   # Using Python 3
   python -m http.server 8080
   
   # Or Python 2
   python -m SimpleHTTPServer 8080
   
   # Or Node.js
   npx http-server -p 8080
   ```

3. **Open in browser**:
   - Local: http://localhost:8080
   - Mobile (same network): http://[YOUR_IP]:8080

### Mobile Testing

1. Find your computer's local IP:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. Connect your mobile device to the **same WiFi**

3. Open mobile browser and visit: `http://[YOUR_IP]:8080`

## 📱 Usage

### For Visitors
- Browse the menu and prices
- Watch videos showcasing the food
- Find location and opening hours
- Contact via phone, WhatsApp, or Instagram
- **Change language**: Tap the button at top-right to cycle through मराठी → हिंदी → English

## 🎯 Features Breakdown

### Video Gallery
- **Auto-scroll**: Videos slide automatically every 3 seconds
- **Pause on interaction**: Stops scrolling when user touches/hovers
- **Pause while playing**: Stops scrolling if a video is playing
- **Smooth animations**: CSS-based transitions

### Language System
- **40+ translation keys** covering all sections
- **Dynamic updates**: Text changes instantly without reload
- **localStorage persistence**: Remembers your language choice
- **Fallback support**: Defaults to Marathi if no preference

### Performance
- **Lazy-loaded videos**: Efficient resource loading
- **Optimized animations**: 60fps smooth scrolling
- **Minimal dependencies**: Fast load times
- **Mobile-optimized**: Touch events and viewport settings

## 🌟 Sections

1. **Hero** - Logo, tagline, scroll indicator
2. **Quick Links** - Call, WhatsApp, Instagram, Owner contact
3. **Video Gallery** - Auto-scrolling food showcase
4. **Menu** - Bhel items with prices
5. **About** - Why choose Anna Bhel
6. **Reviews** - Customer testimonials
7. **Location** - Address with Google Maps link
8. **Timings** - Opening hours and peak times
9. **Footer** - Credits and copyright

## 🔧 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-green: #FF9933;
    --primary-orange: #FFC312;
    --dark-green: #D35400;
    /* ... */
}
```

### Add New Language
1. Add translation object in `translations.js`:
   ```javascript
   const translations = {
       // Existing languages...
       ta: { /* Tamil translations */ }
   };
   ```

2. Add language button in `index.html`:
   ```html
   <button class="lang-btn" data-lang="ta">தமிழ்</button>
   ```

### Modify Menu Items
Edit menu section in `index.html` and update corresponding translations in `translations.js`

## 📞 Contact Information

- **Phone**: +91 8669861103
- **WhatsApp**: wa.me/918669861103
- **Instagram**: [@anna.bhel_](https://www.instagram.com/anna.bhel_)
- **Location**: Jai Bhavani Nagar, Pimple Gurav, Pimpri-Chinchwad

## 👨‍💻 Credits

- **Designer**: [Piyush Kadam](https://github.com/piyushkadam96k)
- **Website**: [piyushkadam.netlify.app](https://piyushkadam.netlify.app/)

## 📄 License

© 2026 Anna Bhel. All rights reserved.

---

**Need a website?** [Contact Piyush Kadam](https://piyushkadam.netlify.app/)
