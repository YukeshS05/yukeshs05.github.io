<div align="center">

# ⚡ YUKESH S — Portfolio

### *"I am Iron Man."*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-yukeshs05.github.io-00D4FF?style=for-the-badge&labelColor=0A0F1A)](https://yukeshs05.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-YukeshS05-181717?style=for-the-badge&logo=github)](https://github.com/YukeshS05)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yukesh_S-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yukesh-s)

<br/>

**A cinematic Iron Man / J.A.R.V.I.S. HUD themed developer portfolio**
**featuring immersive animations, interactive effects, and a fully functional contact system.**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6600?style=flat-square&logo=email&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

</div>

---

## 🎬 Features

### Cinematic Intro
- **J.A.R.V.I.S. HUD Boot Sequence** — Full-screen heads-up display with system readouts, scan line, and progress bar loading to 100%
- **Corner Data Panels** — Real-time style readouts: `SYS INTEGRITY: 94%`, `POWER LEVELS: 100%`, `TARGET: LOCKED`
- **Smooth Transition** — HUD dissolves to reveal the portfolio after boot completes
- **Skip Button** — For returning visitors (auto-skips within same session)

### Interactive Hero Section
- **Mouse-Hover Armor Reveal** — Hover over the developer illustration to reveal an Iron Man armored version with a glowing cyan cursor ring
- **Typewriter Effect** — Cycles through: `Software Engineer` → `ML Enthusiast` → `Full-Stack Developer` → `Cloud Architect` → `AI Researcher`
- **Floating HUD Particles** — Animated code symbols (`{ }`, `< >`, `//`) floating in the background

### Rich Content Sections
| Section | Theme | Content |
|---------|-------|---------|
| **About** | Personnel File | Bio + Education Timeline with glowing markers |
| **Skills** | Tech Arsenal | 6 categories, 30+ technologies with accent colors |
| **Projects** | Mission Log | 7 real projects with GitHub links & metrics |
| **Achievements** | Commendations | 8 award cards (hackathons, certifications, leadership) |
| **Contact** | Open Transmission | Working contact form + social links |

### Animations & Effects
- 🔄 **Scroll-triggered reveals** — Fade-up animations via Intersection Observer
- 📊 **Animated counters** — Stats count up when scrolled into view
- 🌐 **Parallax hex grid** — Subtle background movement on scroll
- 🪟 **Glassmorphism navbar** — Blur effect that solidifies on scroll
- ✨ **Card hover effects** — Glow borders + lift + corner brackets

### Technical Highlights
- 📧 **Real email delivery** via EmailJS (200 emails/month free)
- 📱 **Fully responsive** — Desktop, tablet, and mobile layouts
- ⚡ **Fast loading** — Optimized Vite build (~70KB total gzipped)
- 🔍 **SEO optimized** — Open Graph tags, meta descriptions, semantic HTML

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS (1,700+ lines custom design system) |
| **Logic** | Vanilla JavaScript (ES6 Modules) |
| **Build Tool** | Vite |
| **Email** | EmailJS |
| **Fonts** | Google Fonts (Orbitron, Rajdhani, JetBrains Mono) |
| **Hosting** | GitHub Pages |
| **Illustrations** | AI-generated custom portraits |

---

## 📁 Project Structure

```
yukeshs05.github.io/
├── index.html                  # Main HTML (700+ lines)
├── package.json                # Project config
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.png             # Arc reactor favicon
│   ├── favicon.svg             # SVG favicon
│   └── assets/
│       ├── developer-sketch.png    # Developer portrait
│       └── developer-armored.png   # Iron Man armored version
├── src/
│   ├── main.js                 # All interactions & animations
│   └── style.css               # Complete design system
└── dist/                       # Production build (auto-generated)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YukeshS05/yukeshs05.github.io.git
cd yukeshs05.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Deploy to GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

---

## 🎨 Design System

### Color Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Stark Red | 🔴 | `#E63946` | Accents, alerts, primary CTA |
| Jarvis Cyan | 🔵 | `#00D4FF` | HUD elements, glows, highlights |
| Arc Gold | 🟡 | `#FFB800` | Secondary accents, achievements |
| Surface Dark | ⚫ | `#0A0F1A` | Background |
| Glass Panel | 🔲 | `rgba(10,15,26,0.6)` | Card backgrounds |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Orbitron** | 400–900 | Headings, HUD text |
| **Rajdhani** | 300–700 | Body text, descriptions |
| **JetBrains Mono** | 300–700 | Code, system readouts |

---

## 📧 Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) for real email delivery.

To configure your own:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add a Gmail service and create an email template
3. Update these values in `src/main.js`:
   ```javascript
   emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' });
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
   ```

Template variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`

---

## 🕹️ Hidden Features

| Action | Effect |
|--------|--------|
| **Triple-click** the `<YS/>` logo | Replay the intro animation |
| **Browser console**: `replayIntro()` | Replay the intro animation |
| **New browser tab** | Intro plays fresh (uses sessionStorage) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### Built with ⚡ by Yukesh S

*"Sometimes you gotta run before you can walk."*

[![Portfolio](https://img.shields.io/badge/Visit_Portfolio-00D4FF?style=for-the-badge&labelColor=0A0F1A)](https://yukeshs05.github.io)

</div>
