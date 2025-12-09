Project: ANKITA MAKEUP ACADEMY — Vite + React website

Goal:
- Scaffold a Vite React app (JavaScript or TypeScript — JS is fine) and implement a premium single-page marketing site.
- Use Tailwind CSS for styling and Framer Motion for animations.
- Theme must match the supplied black–gold logo (provide logo asset).

Brand Colors / Tokens:
- richBlack: #000000
- metallicGold: #D4AF37 (use gradient variants like #CBA135 → #D4AF37)
- softWhite: #F5F5F5
- deepCharcoal: #1A1A1A
- accentOpacity variants for subtle glows and glassmorphism.

Design Intent:
- Luxurious, elegant, feminine, modern.
- Heavy focus on typography, spacing, and micro-interactions.
- Use glassmorphism panels, soft drop-shadows, and gold gradient accents.

Animations:
- Framer Motion for entrance animations and hover micro-interactions.
- Hero: fade-in + slow gold glow around logo + parallax on headings.
- Buttons: soft scale + inner glow on hover.
- Cards: elevation on hover.

Hero Section (priority):
- Full-viewport with black → charcoal gradient background.
- Left-aligned (or centered on mobile) content block.
- Large golden logo with soft animated halo/glow.
- Headline: “Unlock Your Artistry with Ankita Makeup Academy”
- Sub-headline: “Professional Makeup Courses • Certification • Hands-On Training”
- Two CTA buttons: “View Courses” (outline gold) and “Book a Free Trial” (solid gold gradient).
- Subtle particle sparkle background or animated shimmer (lightweight, canvas or CSS).

Site Sections (components):
1. Header / Nav (Logo, CTA buttons, sticky, translucent glass nav on scroll)
2. Hero (component: `Hero.jsx`)
3. About (component: `About.jsx`) — include address + landmark
4. Courses (component: `Courses.jsx`) — grid cards with Duration, Highlights, Certification
5. WhyChooseUs (component: `WhyChooseUs.jsx`) — gold icons + short bullets
6. Gallery (component: `Gallery.jsx`) — rounded image tiles with gold borders + lightbox
7. Contact (component: `Contact.jsx`) — contact form + Google Maps embed + address block
8. Footer (component: `Footer.jsx`) — social links, small print, address

Accessibility & Responsiveness:
- Fully responsive across breakpoints, mobile-first.
- Semantic HTML and accessible forms (labels, aria attributes).
- Keyboard accessible modals/lightbox.

Tech & Structure:
- Vite + React
- Tailwind CSS configured with custom theme (color tokens, fonts)
- Framer Motion for animations
- Optional: react-router for multi-page or anchor navigation
- Folder structure:
  /src
    /assets (logo, images)
    /components (Header, Footer, Buttons, Card, Modal)
    /sections (Hero, About, Courses, Gallery, Contact)
    /utils
    App.jsx, main.jsx, index.css, tailwind.config.cjs

Tailwind config: add custom colors, font families (Playfair Display for headings, Poppins for body), and useful plugins if needed.

Example Tailwind tokens (tailwind.config.cjs):
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        richBlack: "#000000",
        metallicGold: {
          DEFAULT: "#D4AF37",
          dark: "#CBA135",
        },
        softWhite: "#F5F5F5",
        deepCharcoal: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        goldGlow: "0 6px 30px rgba(212,175,55,0.12)",
      }
    }
  },
  plugins: [],
};
