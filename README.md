# Gani Abi Saputra V.S. — Premium Interactive Portfolio

An elegant, production-ready, highly interactive personal portfolio designed in a **Swiss-Modern digital file folder style**. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Motion** (formerly Framer Motion) to showcase computer science student **Gani Abi Saputra V.S.**'s experience, technical skills, interactive project simulators, and verified certifications.

---

## 🌟 Overview

This portfolio is styled with a distinct, premium, and professional offline-first motif. Inspired by physical archive systems and modern Swiss-School grid layouts, the user interface features:
*   A tactile file folder motif with realistic layered papers that slide, tilt, and depth-shift.
*   An editorial aesthetic combining deep charcoal, rich brand blue, and warm cream tones.
*   Highly responsive interactive project simulators embedded directly into the workspace, transforming a standard static resume into an immersive software playground.

---

## 🚀 Key Features

*   **Tactile Folder Motif (Hero Section):** Layered folder graphics that slide and lift on hover, complete with dynamic confidential documents and visual quick-links.
*   **Filterable HUD Portrait (About Me Section):** An interactive viewport displaying the developer's portrait equipped with professional retro-future HUD markings and camera filter switches (Grayscale, High Contrast, Sepia, etc.).
*   **Grid-Accent Tech Stack (Skills Section):** A structured layout showcasing official vector-rendered brand logos for Frontend, Backend, and Tools, wrapped in a double-tabbed folder interface.
*   **Interactive Simulation Engines (Projects Section):** Immersive, fully functional interactive simulator boxes for Gani's main projects:
    *   *MIA (UMKM Discovery):* Product categorization filtering and live review submission.
    *   *E-Cycle Platform (AI Waste Tracker):* Carbon savings and economic reward points calculator.
    *   *GrinBuds (Gamified Learning):* Duolingo-style letter recognition game and real-time parent progress charts.
    *   *Portalia (Campus Marketplace):* Live student product addition, category sorting, and interactive listing deletion.
    *   *NusaTales (Culture Hub):* Story node browser demonstrating Laravel backend endpoints.
*   **Adaptive Certificate Renderer (Certifications Section):** Display system for verified credentials with a multi-layered image fallback architecture (PNG -> JPG -> JPEG -> WEBP -> clean raw file routes) to guarantee perfect asset rendering in any preview sandbox.
*   **Premium Interactive Contacts (Contact Section):** High-contrast grid layouts with dynamic validation forms and visual feedback for streamlined collaboration.

---

## 🛠️ Tech Stack

*   **Framework:** React 19.0.1 (Functional components with hooks)
*   **Build Tool:** Vite 6.2.3 (High-performance static compilation)
*   **Styling Engine:** Tailwind CSS v4.1.14 (Direct utility styling with CSS-in-JS-free compilation)
*   **Animation System:** Motion 12.23.24 (`motion/react` spring physics & transitions)
*   **Icons:** Lucide React 0.546.0 (Unified iconography)
*   **Integrations:** `@google/genai` (Configured server-side model interfaces)
*   **Language:** TypeScript (Type-safe models and data structures)

---

## 📁 Folder Structure

```
.
├── CLAUDE.md               # AI context, permanent memory, design system, and prompt logs
├── README.md               # User-facing documentation & developer startup guide
├── index.html              # Core HTML entrypoint
├── metadata.json           # Application settings, frame permissions, and main capabilities
├── package.json            # NPM scripts and library declarations
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite bundler, plugins, and Tailwind integration config
└── src/
    ├── App.tsx             # Root layout, dynamic scroll progress, navigation, and section assembly
    ├── main.tsx            # Main DOM rendering hook
    ├── data.ts             # Central source-of-truth for Gani's personal info, projects, and skills
    ├── types.ts            # Shared TypeScript interface models
    ├── index.css           # Global typography definitions, Tailwind imports, scrollbars, and clips
    └── components/         # Modular layout units
        ├── Hero.tsx        # Hero section (supports "main" folder and "projects" divider views)
        ├── AboutMe.tsx     # Narrative about Gani, featuring filter-switching portrait HUD
        ├── TechStack.tsx   # Categorized skills boards rendered with hand-drawn SVG brand logos
        ├── Projects.tsx    # Live simulation playground for MIA, E-Cycle, GrinBuds, Portalia, & NusaTales
        ├── Certifications.tsx # Fallback-resilient certificate image display boards
        └── Contact.tsx     # Custom contact forms with instant focus styles and email triggers
```

### Key Subdirectories & File Roles

*   `/src/components/Projects.tsx`: The largest component. Contains custom states, interactive calculators, and dashboard widgets that mock real-world operations for each of Gani's 5 major projects.
*   `/src/data.ts`: Centralizes Gani's metrics, project roles, and descriptions. Editing this file immediately updates the texts and details across the entire application.
*   `/src/index.css`: Imports the premium typography pairing (Archivo display, Inter body, JetBrains Mono indicators) and establishes the custom folder clip-paths.

---

## 💻 Installation & Local Development Setup

Follow these steps to configure and run the project locally.

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** (v10.0.0 or higher) installed on your system.

### 2. Clone and Install Dependencies
Navigate into the project root directory and run the following command to populate `node_modules`:
```bash
npm install
```

### 3. Environment Configuration
If you plan to utilize server-side functionalities or external API endpoints, create a `.env` file in the root based on `.env.example`:
```bash
cp .env.example .env
```

### 4. Spin up the Development Server
Run the local Vite development server:
```bash
npm run dev
```
The server will boot, by default binding to port `3000` on host `0.0.0.0` (accessible locally via `http://localhost:3000`).

---

## 📦 Build & Production Deployment

To compile the application into lightweight, optimized static assets:

```bash
npm run build
```

This generates a optimized production-ready bundle inside the `/dist` directory.

### Production Execution Script
If your build requires node serving:
```bash
npm run start
```

### Deploying to Cloud Services (Cloud Run / Vercel)
The codebase is fully compatible with standard containerized runtime deployments (Google Cloud Run) or static Jamstack hosting providers (Vercel, Netlify):
*   **Static SPA deployment:** Configure your hosting provider to point to the `/dist` directory. Ensure rewrite rules map all requests (`/*`) back to `index.html` to support smooth browser navigation.
*   **Containerized deployment:** Deploy the pre-configured Cloud Run setup. The server will bind natively to the standard container ingress routing on port `3000`.

---

## 🏛️ Project Architecture

```
                                  +-------------------+
                                  |     index.html    |
                                  +---------+---------+
                                            |
                                  +---------v---------+
                                  |    src/main.tsx   |
                                  +---------+---------+
                                            |
                                  +---------v---------+
                                  |    src/App.tsx    |
                                  +----+----+----+----+
                                       |    |    |
        +------------------------------+    |    +-----------------------------+
        |                                   |                                  |
+-------v---------+               +---------v-------+                +---------v--------+
|   Hero.tsx      |               |  AboutMe.tsx    |                |  TechStack.tsx   |
| (tactile folder)|               | (interactive-HUD|                | (double-tab tabs |
+-----------------+               |  filter portrait|                |   with SVG logos)|
                                  +-----------------+                +------------------+
                                            |
                                  +---------v---------+
                                  |   Projects.tsx    |
                                  | (live simulator   |
                                  |   control panels) |
                                  +---------+---------+
                                            |
                                  +---------v---------+
                                  |Certifications.tsx |
                                  | (resilient image  |
                                  |   fallback stack) |
                                  +---------+---------+
                                            |
                                  +---------v---------+
                                  |    Contact.tsx    |
                                  | (validation form) |
                                  +-------------------+
```

---

## ⚡ Performance & Design Conventions

1.  **Strict Responsive Density:** Every section operates desktop-first for precise card alignments, but implements robust mobile-first wrappers (`sm:`, `md:`, `lg:`) to resize cards, folders, and simulators on small screens. Touch targets are styled with a minimum hit space of `44px` on mobile layouts.
2.  **No Image Layout Shifts:** The profile avatar viewport and the certificate cards operate with explicit aspect ratios (`aspect-square` and `aspect-[1.6]` respectively), ensuring the layout remains rock-solid while images are loaded.
3.  **No Unsolicited SDKs / Zero AI-Slop:** The design is structurally clean. It does not clutter the page margin with mock server terminal feeds, simulated ping statuses, or unrequested features. Every layout component traces directly back to Gani's professional accomplishments.
4.  **Optimized Vector Icons:** Rather than pulling in bulky external image directories, all brand icons in the skills section are loaded via optimized raw inline SVG paths, reducing DNS lookup overhead and speeding up overall load times.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## ✍️ Author

*   **Gani Abi Saputra V.S.** — Computer Science Student at Universitas Pembangunan Nasional "Veteran" Jawa Timur.
*   **Email:** [gamely017@gmail.com](mailto:gamely017@gmail.com)
*   **GitHub:** [github.com/jettt017](https://github.com/jettt017)
