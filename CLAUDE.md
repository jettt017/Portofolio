# CLAUDE.md — Permanent Developer & AI Context

This file serves as the definitive source of truth, visual guidelines, and development memory for both human programmers and future AI assistants working on Gani Abi Saputra V.S.'s Portfolio project.

---

## 📁 Project Identity

*   **Project Name:** Gani Abi Saputra Portfolio
*   **Purpose:** A digital showroom and interactive resume for full-stack developer and computer science student Gani Abi Saputra V.S.
*   **Goals:**
    *   To present Gani's professional identity, tech stacks, and credentials in a highly distinctive, non-generic fashion.
    *   To allow visitors to actively test Gani's product design and engineering capabilities through live interactive simulator sandboxes.
    *   To maintain an exceptionally polished, zero-bloat aesthetic reflecting Swiss-School modernist layout discipline.
*   **Design Philosophy:**
    *   **Tactile Modernism:** Re-imagining computer desktop metaphors as physical paper assets.
    *   **Aesthetic Restraint (Anti-AI-Slop):** No unsolicited credit lines, no fake blinking telemetry indicators, no fake terminal logs in the margins, and no purple-to-blue neon gradients. The focus is strictly on Gani's real data.
    *   **Authenticity Over Mocking:** All interactive simulators must feel like tangible miniature versions of the real product, with functional validation, state updates, and real computational feedback.

---

## 🛠️ Tech Stack

### Frameworks & Libraries
*   **React 19.0.1:** Utilizes modern React hooks (`useState`, `useEffect`, `useRef`), JSX elements, and functional state bindings.
*   **Vite 6.2.3:** Handles rapid module grouping, optimized code-splitting, and lightning-fast asset pipeline execution.
*   **Tailwind CSS v4.1.14:** Drives the entire design system through compiled core styles with zero runtime overhead.
*   **Motion 12.23.24:** Leverages physics-based spring models and spatial layout transitions (`AnimatePresence`, `motion.div`).
*   **Lucide React 0.546.0:** The exclusive library for scalable vector UI icons.

### Runtimes & Infrastructure
*   **TypeScript (~5.8.2):** Strict type safety enforcing data structures for projects, tools, and certifications.
*   **Express 4.21.2:** Supports lightweight server proxy architectures for securing secret key requests.

---

## 🏛️ Application Architecture

### Navigation & Layout Routing
*   **Single-Page Scroll Stack:** The app mounts all sections on a vertical scroll axis, styled as separate sheets.
*   **Intersection Tracker:** A scroll event observer in `App.tsx` calculates the active section height based on offsets (`window.scrollY + window.innerHeight / 3`), dynamically highlighting the current menu anchor.
*   **Smooth Navigation Engine:** The custom scroll-to-section function triggers soft browser viewport slides using `.scrollIntoView({ behavior: "smooth" })` to avoid jarring offsets.
*   **Spring-Coupled Scroll Progress:** A top-pinned progress indicator bar is coupled with `useScroll()` and smoothed with Framer Motion's `useSpring()` physics engine to avoid jerky visual updates on mousewheel turns.

### Local Simulation Engine
*   Each of the 5 projects features a fully functional simulated workspace container within `/src/components/Projects.tsx`:
    *   **MIA Simulator:** Category filter state and reviews collection state. Users can submit reviews that immediately update the UI.
    *   **E-Cycle Simulator:** Dynamic multiplier equations calculate carbon savings (`weight * 2.4` kg CO2) and financial point payouts based on select recycled electronic items.
    *   **GrinBuds Simulator:** Letter discrimination engine. Tracks live user scores, validates selected button responses, triggers color-coded visual feedback, and mounts a simulated interactive chart panel representing parents' statistics.
    *   **Portalia Storefront:** An active student listings model. Users can fill out forms to add a new product (with type-safe price integers) and delete existing items by matching unique Unix timestamps.
    *   **NusaTales Node Browser:** Renders cultural storytelling cards and displays Gani's Laravel back-end routing logic using an architecture simulation tree.

### Asset Resilience Strategy
*   **Multi-Format Cascade (Certifications):** To protect the user interface from broken image displays in highly sandboxed preview environments, `Certifications.tsx` utilizes state-driven `onError` triggers. If a resource fails to load, it automatically cascades through different extension routes:
    *   `assets/[File].png` -> `assets/[File].jpg` -> `assets/[File].jpeg` -> `assets/[File].webp` -> `/assets/[File]` -> `/[File].png` -> `/[File].jpg` -> `/[File].jpeg` -> `/[File]`

---

## 🎨 Design System

| System Property | Definition | Value / Classes |
| :--- | :--- | :--- |
| **Typography** | Display Font | **Archivo** (`font-display font-black tracking-tight uppercase`) |
| | Sans Body | **Inter** (`font-sans font-light text-near-black/80`) |
| | Mono Indicators | **JetBrains Mono** (`font-mono text-xs uppercase tracking-widest`) |
| **Color Palette** | Main Background | **Cream** (`#F6F3E8`) |
| | Primary Accent | **Brand Blue** (`#2F8DEB`) |
| | Secondary Accent | **Near Black** (`#1A1A1A`) |
| | Layout Accents | **Cream-Dark** (`#FAF9F5`), **Gold-Accent** (`#DFDBC5`) |
| **Spacing & Padding** | Card Grid Margins | `p-6 md:p-12`, `gap-6 md:gap-8` |
| | Layout Limits | Centered layout container at `w-full max-w-7xl mx-auto` |
| **Grid System** | Section Split | `grid-cols-1 lg:grid-cols-12 gap-8` (Left 5-cols narrative, Right 7-cols simulator) |
| **Border Radius** | Cards & Folders | `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px) |
| **Shadow System** | Subtle Layouts | `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-2xl` |
| **Buttons** | Core Controls | `px-4 py-2 font-mono text-xs uppercase rounded-t-lg border-t border-x` |
| **Animations** | Spring Physics | Stiffness: `100`, Dampening: `30`, RestDelta: `0.001` |
| **Breakpoints** | Adaptive Ranges | Mobile: `<640px`, Tablet: `md:768px`, Desktop: `lg:1024px` |

---

## 📂 Folder Structure & File Architecture

*   **`tsconfig.json`**: Enforces strict typing, type-stripping, and relative module alias bindings.
*   **`vite.config.ts`**: Plugs in the React compiler, asset loader, and configures Tailwind's compile-time CSS generator plugin.
*   **`src/types.ts`**: Dictates standard types:
    ```typescript
    export interface Project {
      id: string;
      title: string;
      subtitle: string;
      role: string;
      description: string;
      techStack: string[];
      contributions: string[];
      link?: string;
    }
    ```
*   **`src/data.ts`**: Holds Gani's actual career metrics. The absolute single-source-of-truth.
*   **`src/index.css`**: Configures global base colors, imports Google fonts, styles Webkit scrollbar thumbs (`#d4cfb9`), and outlines custom file folder cuts via clip-paths (`polygon(0 0, 120px 0, 150px 30px, 100% 30px, 100% 100%, 0 100%)`).

---

## ⚠️ Development Rules & Conventions

### Coding Style & Lint Safety
1.  **Strict Component Separation:** Never consolidate everything into `App.tsx`. All modular layouts must be isolated as separate, single-export functional files inside `src/components/`.
2.  **Explicit Type Imports:** Place all `import` statements strictly at the top of the file. Use named object destructuring for React imports. Do NOT mix type-only imports for active runtime configurations.
3.  **No Direct DOM Mutations:** Use React state or refs. Never query the DOM directly to mutate layout structures, except for reading container offsets for scroll tracking.
4.  **No Infinite Re-renders:** When writing hooks, avoid tracking wide non-primitive structures (arrays, objects) directly in `useEffect` dependency trees. Always bind to primitive numbers, strings, or simple booleans.

### UX & Styling Rules
1.  **Tailwind Class Only:** Do not create separate `.css` modules or use inline style objects for UI layout. Use Tailwind classes directly.
2.  **No Mock Content:** All state inputs must have instant validation feedback. Avoid placing flat un-clickable images inside the project workspace—always map them to working simulators.
3.  **Touch Sizing:** Ensure every CTA button and input selection wrapper has a minimum physical height of `44px` on screen-adaptive layouts.
4.  **No Broken Images:** Always attach the multi-format fallback onerror block to certificate pictures to ensure successful rendering under strict sandbox boundaries.

---

# AI Prompt History

This section logs the sequential prompt pipeline used to design, refine, and perfect Gani Abi Saputra V.S.'s professional portfolio.

## Feature: Hero Section Folder Motif
*   **Date:** June 23, 2026
*   **Purpose:** To build a highly unique, Swiss-Modern file folder hero layout.
*   **Prompt:**
    ```text
    Create a main Hero section utilizing a Swiss-Modernist aesthetics palette. Instead of standard grids, render a literal giant computer directory folder motif. The folder background should use #2F8DEB (Brand Blue), with a top tab cutout clipped using CSS polygon. Inside the folder, lay a white confidential paper document sheet that slides up on hover, and an offset tilted dark secondary floating card with active contacts and navigation trigger links. Secure bottom text alignment saying 'BUILDING IDEAS INTO REALITY' and displaying Gani's title as Full Stack Developer.
    ```
*   **Result:** Created `/src/components/Hero.tsx` with dynamic tilt animations, multi-layered spring translations, and premium typography.
*   **Notes:** Perfect execution. The hover effects look incredibly tactile.

## Feature: Grid-Accent Tech Stack with Vector Brand Logos
*   **Date:** June 24, 2026
*   **Purpose:** To display skills using authentic vector SVG brand representations instead of bloated external image packs.
*   **Prompt:**
    ```text
    Build a Skills section styled as a double-tabbed physical directory. Create a helper component called TechLogo that takes an 'icon' name string and returns a perfectly rendered, authentic, responsive SVG path representing that brand (React spinning ellipse, Next.js black-to-white vectors, Laravel red prism, etc.). Map out Frontend, Backend, and Tools into three distinct columns. Wrap them inside a solid blue banner matching the folder theme.
    ```
*   **Result:** Implemented `TechStack.tsx` utilizing inline SVG path rendering for over 20 technologies, reducing network request payloads.
*   **Notes:** Excellent responsive scaling. Cards use a subtle vertical lift on hover.

## Feature: Real Certificate Fallback Renderer
*   **Date:** June 25, 2026
*   **Purpose:** Create robust fallbacks to display credentials without risk of broken asset URLs.
*   **Prompt:**
    ```text
    In Gani's Certifications component, replace the simple vector seals with a robust image rendering block. Gani has uploaded real certificate images for Dicoding and Laravel Course named 'Certivicate-Dicoding' and 'Certivicate-LaravelCourse'. Since sandbox preview servers sometimes block or rename assets, write a state-driven onError cascade that switches through .png, .jpg, .jpeg, .webp extensions, and absolute/relative path roots automatically to guarantee they render successfully under any preview port.
    ```
*   **Result:** Refined `Certifications.tsx` with a multi-extension recursive state swapper.
*   **Notes:** No more broken image icons. The image containers have rigid aspect ratios to prevent page shifts.

## Feature: 5 Interactive Project Simulators
*   **Date:** June 26, 2026
*   **Purpose:** Build tangible, fully functional mini-sandboxes for each project.
*   **Prompt:**
    ```text
    In Gani's Projects component, we want the right-hand column to contain a premium, fully interactive live simulator for whichever project folder is currently active.
    1. MIA: Show local business cards with distances, category filters, and a real form allowing users to submit reviews that immediately update the list.
    2. E-Cycle: Build an active waste calculator with dropdowns for laptops, batteries, and phones, outputting the exact carbon saved and economic reward points earned.
    3. GrinBuds: Build an actual mini-game validating letter discrimination (Duolingo-style) and a parent dashboard displaying learning performance charts.
    4. Portalia: Build a student marketplace workspace where users can fill in forms to add items and click trash icons to delete listings.
    5. NusaTales: Render a visual mock database tree highlighting Laravel architecture.
    All state engines must be completely independent and use elegant Motion transitions.
    ```
*   **Result:** Rewrote `Projects.tsx` with high-fidelity, client-side, interactive sandbox cards.
*   **Notes:** This makes Gani's portfolio stand out compared to static templates.

## Feature: JityGeld Featured Project
*   **Date:** July 6, 2026
*   **Purpose:** Add JityGeld as the top Featured Project.
*   **Prompt:**
    ```text
    Add a new Featured Project "JityGeld" to the portfolio, reordering the list of featured projects, displaying JityGeld as the first project using a premium mockup image from assets, and adding custom CTA buttons (Live Demo and View GitHub Repository).
    ```
*   **Result:** Added JityGeld to `data.ts`, updated `Projects.tsx` with a custom `JityGeldSimulator` showcasing `Project-JityGeld.png` and dedicated action buttons, and updated documentation.
*   **Notes:** Fully responsive, zero-error execution.

## Feature: Custom Magnetic Cursor
*   **Date:** July 12, 2026
*   **Purpose:** Add a custom tactile cursor with spring-mode ring following, magnetic pulls, interactive shape morphing, and click squashing.
*   **Prompt:**
    ```text
    Create a standalone custom cursor component (MagneticCursor.tsx) that has a solid Near Black dot and a Brand Blue outline ring following the mouse with Framer Motion spring physics. When near data-magnetic elements, it pulls to the center and grows in size. When hovering folder/paper elements, it morphs into a rounded square. Clicking triggers a scale-squash. Apply mix-blend-difference for theme contrast, hide on mobile/tablet viewports, and disable native cursor only on desktop.
    ```
*   **Result:** Implemented `MagneticCursor.tsx` with dual motion targets, interactive hover states, conditional tailwind responsive styling, and integrated `data-magnetic` attributes on CTA button and project tabs.
*   **Notes:** Fully compliant with Swiss-school modern layout bounds and Anti-AI-Slop guidelines. Zero compilation errors.

## Feature: Magnetic Cursor Responsiveness Fix
*   **Date:** July 12, 2026
*   **Purpose:** Fix cursor tracking lag caused by React state-driven animation loop — switch to motion values to bypass React render cycle entirely.
*   **Prompt:**
    ```text
    Rewrite MagneticCursor.tsx using useMotionValue and useSpring instead of useState + animate props. Dot should bind directly to raw motion values (zero spring, 1:1 with cursor). Ring should use 3 separate spring configs: SPRING_TRACKING (stiffness:500, damping:40, mass:0.5) for normal mouse follow, SPRING_MAGNETIC (stiffness:100, damping:30) for elastic snap to data-magnetic center, and SPRING_SCALE (stiffness:400, damping:25) for snappy size/shape morphs. No debounce on mousemove. Only primitive booleans in useEffect deps.
    ```
*   **Result:** Rewrote `MagneticCursor.tsx` with `useMotionValue`/`useSpring` architecture. Dot is wired directly to raw `rawX`/`rawY` motion values — zero lag. Ring uses dual spring pools (`trackX`/`trackY` for normal, `slowX`/`slowY` for magnetic snap) and switches between them based on `isMagnetic` state.
*   **Notes:** Zero compilation errors. All motion updates happen in Framer's internal RAF loop, completely bypassing React's render cycle for frame-perfect tracking.

## Feature: Project Panel Transition Consistency Fix
*   **Date:** July 12, 2026
*   **Purpose:** Fix jerky/inconsistent animation when switching project tabs in the Featured Projects section.
*   **Prompt:**
    ```text
    Wrap the left-panel project description map in AnimatePresence mode="wait" so old content exits before new content enters. Add matching exit={{ opacity:0, x:20 }} to make the slide-out directional. Align duration and easing to duration:0.3 / ease:"easeInOut" — consistent with the navbar's AnimatePresence convention. Keep key={proj.id} stable. Do not touch the simulator/interactive state.
    ```
*   **Result:** Added `<AnimatePresence mode="wait">` wrapper around the left description panel in `Projects.tsx`. Changed `x: -30 / duration:0.5` (no exit, no easing) to `x: -20 / exit x:20 / duration:0.3 / easeInOut` — matching the navbar's transition language.
*   **Notes:** Right panel (simulators) already had `mode="wait"` — now both panels are in sync. No simulator state was touched.

## Feature: Global Focus Ring Consistency Fix
*   **Date:** July 12, 2026
*   **Purpose:** Fix inconsistent native browser rectangular focus outlines — replace with a uniform pill-shaped brand-blue ring across every interactive element sitewide.
*   **Prompt:**
    ```text
    No component uses focus-visible classes — the browser's native rectangle outline appears everywhere. Fix by adding a single :focus-visible rule inside the existing @layer base block in index.css. Use box-shadow (2px cream gap + 4px brand-blue ring) with border-radius:9999px so it's always pill-shaped regardless of each element's own border-radius. This covers every button, link, and input across all components in one touch.
    ```
*   **Result:** Added `:focus-visible` rule inside `@layer base` in `index.css`. Uses `box-shadow` double-ring technique (2px `--color-cream` offset + 4px `--brand-blue` ring) with `border-radius: 9999px` — always circular/pill on any element shape.
*   **Notes:** Single-file fix covering all interactive elements sitewide. Zero per-component changes. Adapts to dark mode automatically via CSS variables.

## Feature: Hover Cursor Shape Consistency Fix
*   **Date:** July 12, 2026
*   **Purpose:** Fix custom cursor morphing inconsistency on folder tabs to match the circular cursor shape used across all other buttons.
*   **Prompt:**
    ```text
    Change data-magnetic="paper" to data-magnetic on the folder tab buttons in Projects.tsx so that their hover cursor remains a standard circle/pill matching the navbar menu buttons instead of morphing into a rounded square.
    ```
*   **Result:** Updated `Projects.tsx` folder tab buttons to use the base `data-magnetic` attribute, reverting their hover cursor shape to a circle.
*   **Notes:** Focus outlines and hover cursor designs are now completely aligned as circles across all action buttons.

## Feature: Cursor Teleportation & Snap Synchronization Fix
*   **Date:** July 12, 2026
*   **Purpose:** Fix kursor teleportation jump and laggy handoff when transitioning in and out of the data-magnetic snapping states.
*   **Prompt:**
    ```text
    Avoid switching between separate spring instances (trackX/trackY vs slowX/slowY) which have different previous values, causing instant jumping/teleportation. Instead, synchronize the slow spring starting values to the track spring positions at the exact moment of entering the magnetic state, and synchronize rawX/rawY/trackX/trackY back to the slow spring current positions at the exact moment of leaving the magnetic state inside onMouseMove.
    ```
*   **Result:** Synchronized coordinate states of dual spring pools (`trackX`/`trackY` and `slowX`/`slowY`) inside `onMouseMove` at the exact frames of state transition.
*   **Notes:** Eliminates teleportation jumps, delivering a completely fluid transition when entering and leaving magnetic fields.

## Feature: Unified Circular Cursor Hover Shape
*   **Date:** July 12, 2026
*   **Purpose:** Enforce a perfect circle hover shape for all components across the entire website.
*   **Prompt:**
    ```text
    Remove all paper/folder rounded-square morphing codes and parameters from MagneticCursor.tsx so that the custom cursor outer ring is always a perfect circle (50% border-radius) on all elements, maintaining a unified visual identity.
    ```
*   **Result:** Cleaned up `MagneticCursor.tsx` by removing `hoverType` string states and the `"paper"` check. Enforced `borderRadius: "50%"` directly on the ring style.
*   **Notes:** Simplifies the state machine and makes the cursor shape look 100% consistent across all components.

## Feature: Removed Cursor Magnet Snapping Logic
*   **Date:** July 12, 2026
*   **Purpose:** Revert the custom cursor snapping mechanics completely to eliminate duplicate magnetic behaviors (button pull vs. cursor snap) and cursor teleportation.
*   **Prompt:**
    ```text
    Remove all magnetic element detection, snap center locks, and coordinate springs from MagneticCursor.tsx. The cursor should be a pure mouse follower, expanding smoothly as a circle on hover over clickable elements and squashing on click, completely preventing cursor teleportation.
    ```
*   **Result:** Cleaned up `MagneticCursor.tsx` by removing all `[data-magnetic]` query selectors, snap calculations, and coordinate handoffs. The ring now uses a single SPRING_TRACKING spring to track the mouse coordinates smoothly at all times.
*   **Notes:** Eliminates double animations (magnetic buttons already move dynamically) and guarantees zero cursor jump or lag.

---

## 🗺️ Asset Mapping

| Asset Asset | Intended Type | Location in App | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Gani Portrait Mockup** | External URL | `src/components/AboutMe.tsx` | Displayed inside the filter-switching HUD portrait card. |
| **Certivicate-Dicoding** | PNG / JPG | `src/components/Certifications.tsx` | Web Developer Learning Path credential display. |
| **Certivicate-LaravelCourse** | PNG / JPG | `src/components/Certifications.tsx` | Fullstack Laravel Development credential display. |
| **Project-JityGeld** | PNG | `src/components/Projects.tsx` | Preview of the JityGeld premium finance tracker dashboard. |
| **Project-Portalia** | PNG | `src/components/Projects.tsx` | Preview of the Portalia Campus Marketplace mobile application. |
| **Lucide Icons** | SVG Vector | Across all components | Interactive navigation UI symbols and control triggers. |
| **Tech Brand Icons** | Custom inline SVG | `src/components/TechStack.tsx` | Official, responsive brand icons for the skills matrix. |

---

## 📋 AI Instructions for Future Assistants

When a future AI assistant picks up development on Gani's portfolio, it **MUST** strictly adhere to the following rules:

1.  **Preserve the Visual Rhythm:**
    *   Never modify the color system (#F6F3E8 background, #2F8DEB primary accents, and #1A1A1A deep charcoal).
    *   Do not inject generic gradient backgrounds or default circular elements.
    *   Keep the margins, layout paddings (`p-6 md:p-12`), and centered bounds (`w-full max-w-7xl mx-auto`) intact.
2.  **Protect the Interactive Simulators:**
    *   Do not simplify or remove the interactive calculators, review engines, or letter-discrimination game in `/src/components/Projects.tsx` to save space. They represent Gani's engineering craft.
    *   If adding new projects to `data.ts`, you MUST expand the simulator selection block in `Projects.tsx` to include a brand-new custom workspace simulator.
3.  **Preserve Spacing and Layout Hierarchy:**
    *   The single-view stacked scrolling structure must be preserved. Do not split the portfolio into multiple separate pages or insert a sidebar.
    *   Maintain the current font pairing (Archivo display, Inter body, and JetBrains Mono markers).
4.  **Append Future Changes to Prompt History:**
    *   Any major component added or visual theme refactored must be documented by adding a new log entry to the **AI Prompt History** section in this file, maintaining Gani's permanent design records.
