# 🚀 CAT Sessions — Frontend Presentation Hub

Welcome to the **CAT Sessions Platform**, a high-performance, visually striking, and interactive presentation engine built exclusively for the CAT Frontend Track (2025-2026). 

This platform completely reimagines traditional slides (like PowerPoint or Google Slides) into a **living, breathing web application** built with React, Vite, Tailwind CSS, and Framer Motion.

---

## ✨ Key Features

### 1. Premium Course Hub
- **Dynamic Session Catalog**: The home page acts as a premium dashboard (similar to Udemy or Coursera), dynamically loading available sessions from `src/data/sessions.js`.
- **Search & Navigation**: Clean, accessible UI to quickly launch directly into specific sessions.

### 2. High-Impact Slide Engine
Instead of static images, slides are rendered programmatically using our custom `SlideRenderer` and `SlideTemplates.jsx`. 
- **Glassmorphism & Neon Aesthetics**: Deep space backgrounds (`#001018`) with glowing, pulsing ambient orbs and vibrant brand accents (`#B92025`).
- **Framer Motion Integration**: Every element cascades onto the screen with buttery-smooth spring animations.
- **Scroll-Safe Layouts**: Content-heavy slides automatically anchor and become safely scrollable via CSS `m-auto` tricks, preventing top-cutoff.

### 3. Diverse Slide Templates
The engine supports multiple specialized layouts:
- **Hero / Section Slides**: Massive typography with gradient texts for high impact.
- **Timeline / Flow Slides**: Beautiful vertical and horizontal pipelines.
- **Cards Slide**: Grid-based layouts featuring `lucide-react` icons and custom colored neon glows (`cyan`, `purple`, `green`, `pink`).
- **Code Slide**: macOS-style terminal windows for displaying syntax-highlighted code.
- **Diagram Slide**: Rich HTML mapping, such as the *Anatomy of a URL* layout.

### 4. Interactive Presentation Viewer
- **Canva-Style Scrubber**: A beautiful, floating horizontal range slider at the bottom center. As you drag, the track dynamically fills up, and a tooltip previews the slide title.
- **Keyboard & Touch Navigation**: Full support for `ArrowRight`/`ArrowLeft`, `Space`, and touch-swiping.

### 5. Interactive Whiteboard (`tldraw`)
- A single click on the left sidebar transforms the presentation into a **live, transparent whiteboard**.
- Powered by `tldraw`, presenters can draw perfectly smoothed SVG lines, place sticky notes, draw shapes, or use a laser pointer directly *over* the presentation slides.
- Presentation controls smoothly slide away when the whiteboard is active to prevent overlapping UI.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── presentation/
│   │   └── DrawingCanvas.jsx  # The transparent tldraw whiteboard overlay
│   └── slides/
│       ├── SlideRenderer.jsx  # Switch statement that mounts the right template
│       └── SlideTemplates.jsx # The visual implementations of every slide layout
├── data/
│   ├── sessions.js            # Metadata for the home page catalog
│   └── session-1.js           # The master JSON data for the first session
├── pages/
│   ├── Home.jsx               # The premium course dashboard
│   └── PresentationViewer.jsx # The core presentation logic, scrubber, and routing
├── App.jsx                    # React Router DOM definitions
└── index.css                  # Tailwind imports, base styles, and custom scrollbars
```
---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive Whiteboard**: [Tldraw](https://tldraw.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)

---

## 🎨 Design System

- **Primary Brand Color**: `CAT Red (#B92025)`
- **Background**: Deep Space Blue (`#001018`) to Deep Navy (`#003049`)
- **Typography**: `Cairo` font family (Arabic/English support, clean, modern).
- **Accents**: Neon Cyans (`#22D3EE`), Purples (`#A78BFA`), and Greens (`#4ADE80`).

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Building for Production**:
   ```bash
   npm run build
   ```
   *(The app is fully static and can be deployed instantly to Vercel, Netlify, or GitHub Pages).*

---
*Built with ❤️ for the CAT 2025-2026 Season.*
