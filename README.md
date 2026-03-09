# GDCoC LGU - Google Developer Clubs of Code

A modern, fully animated frontend website for the Google Developer Clubs of Code - Laguna University Chapter.

## 🎨 Design System

### Google-Inspired Brand Colors
- **Primary Blue**: #4285F4
- **Red Accent**: #EA4335
- **Yellow Accent**: #FBBC05
- **Green Accent**: #34A853
- **Background**: #FFFFFF
- **Dark/Footer**: #202124

## 💻 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS** (v4)
- **Motion** (Modern React animation library, successor to Framer Motion)
- **AOS** (Animate On Scroll)
- **React Icons**

## ✨ Features

### 1. Fixed Navbar
- Transparent initially, solid background on scroll
- Smooth scroll navigation with active link indicators
- Responsive hamburger menu for mobile
- Animated entrance and menu transitions

### 2. Hero Section
- Word-by-word animated headline
- Floating Google-colored abstract shapes
- Parallax background effects
- Animated CTA button with pulse and ripple effects

### 3. About Section
- Slide-in animations from left and right
- Statistical counters with staggered reveal
- Mission, Vision, and Community Focus

### 4. Highlight Cards
- Four core value cards (Mission, Vision, Values, Impact)
- 3D tilt hover effects
- Glow borders in Google colors
- Animated CTA button with bounce effect

### 5. Team Section
- 8 team member cards with photos
- Image zoom on hover
- Social icons reveal on hover
- Staggered slide-up animations

### 6. Hall of Fame
- **Member of the Month**: Featured spotlight card with glowing border
- Trophy icon with floating animation
- Hall of Fame grid with shine sweep effects
- Badge pop-in animations

### 7. Events Section
- Alternating left/right slide-in for event cards
- Date badge with bounce animation
- Event details with icons
- Hover elevation and glow effects

### 8. Get In Touch
- Social media buttons (LinkedIn, WhatsApp, Instagram, GDC Community)
- Ripple click effects
- Icon spin animations on hover
- Glow outline effects

### 9. Footer
- Dark theme with animated gradient background
- Contact information with icons
- Quick links navigation
- Social media icons with pulse animation
- Newsletter subscription form

## 🎯 Animation Features

All animations follow the principles of being:
- Smooth and elegant
- Premium feel without being overwhelming
- Performance-friendly
- Section reveal on scroll (AOS)
- Staggered entrance animations
- Micro hover interactions
- Button ripple effects
- Floating abstract shapes
- Subtle parallax effects

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── HighlightCards.jsx
│   │   ├── Team.jsx
│   │   ├── HallOfFame.jsx
│   │   ├── Events.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── teamData.js
│   │   ├── hallOfFameData.js
│   │   └── eventsData.js
│   └── App.tsx
└── styles/
    ├── index.css
    ├── theme.css
    ├── tailwind.css
    └── fonts.css
```

## 🚀 Getting Started

All dependencies are already installed. The website is ready to view!

## 📝 Data Management

All content uses static data from JavaScript files:
- **teamData.js**: Team member information
- **hallOfFameData.js**: Member of the Month and Hall of Fame members
- **eventsData.js**: Upcoming events

To update content, simply edit these data files.

## 🎨 Customization

### Adding Team Members
Edit `/src/app/data/teamData.js` and add new objects to the array.

### Adding Events
Edit `/src/app/data/eventsData.js` to add or modify events.

### Updating Hall of Fame
Edit `/src/app/data/hallOfFameData.js` for Member of the Month and Hall of Fame members.

## 🌟 Special Features

- **Custom Google-colored scrollbar**
- **Smooth scroll behavior throughout**
- **Responsive design for all screen sizes**
- **Accessibility-friendly animations**
- **SEO-optimized structure**

## 📄 License

© 2026 GDCoC LGU. All Rights Reserved.

---

Made with ❤️ by GDCoC LGU Team
