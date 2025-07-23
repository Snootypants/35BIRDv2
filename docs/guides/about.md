# About 35Bird - Frontend v2 Project Overview

This document serves as a comprehensive touchstone for the `/Frontend(v2)` project, providing a quick and detailed overview of its purpose, architecture, key features, and technical implementation. It aims to familiarize anyone with the project's core aspects without needing to scan the entire directory.

## 1. Project Purpose & Vision

The Frontend v2 is the official website for 35Bird, designed to showcase creative coding projects, exemplify clean code practices, and demonstrate innovative web development. It's built as a modern, modular, and performant single-page application (SPA) with a strong focus on user experience and maintainability.

## 2. Key Features & Functionalities

*   **Dynamic Project Display:** Projects are loaded dynamically from `data/projects.json`, allowing for easy updates and management of project showcases.
*   **Interactive Fluid Background:** A WebGL-powered fluid dynamics simulation (`utils/fluid.js`) provides a visually engaging and interactive background on the homepage.
*   **Theme Switching:** Users can switch between different themes (classic, dark, ghibli) managed by `utils/theme.js`, personalizing their visual experience.
*   **Login/Version History Drawers:** Slide-out drawers (`index.html` and `styles/components/drawer.css`) provide access to login functionality and a detailed version history (`versionHistory.md`).
*   **Responsive Design:** Optimized for all screen sizes with a mobile-first approach, ensuring a consistent experience across devices.
*   **Project Pages:** Individual HTML pages for each project (`pages/*.html`) are dynamically linked and display project-specific content.

## 3. Core Technologies Used

*   **HTML5:** Semantic markup for content structure (`index.html`, `pages/*.html`).
*   **CSS3:** For styling, utilizing a modular, utility-first approach (`styles/main.css` and subdirectories).
*   **JavaScript (ES6+):** For dynamic content loading, interactive elements, and application logic (`utils/*.js`, `index.html` script).
*   **WebGL:** Powers the fluid background animation for high-performance graphics (`utils/fluid.js`).

## 4. File Structure & Organization

The project adheres to a modular and organized file structure:

*   `/assets/`: Contains all static assets like images, fonts, and icons.
*   `/components/`: Reusable UI components (currently integrated directly into `index.html` and `styles/components/`).
*   `/config/`: Configuration files (e.g., `build.js`).
*   `/data/`: Static data files, primarily `projects.json` for project information.
*   `/exampleCode/`: Contains example code snippets.
*   `/layouts/`: Defines page layouts (`styles/layouts/`).
*   `/pages/`: Individual HTML pages for each project and the main `index.html`.
*   `/styles/`: Comprehensive CSS organization:
    *   `/base/`: Global styles, variables, typography, and resets.
    *   `/components/`: Styles for individual UI components (buttons, cards, drawers, etc.).
    *   `/layouts/`: Styles for overall page layouts (grid, page structure).
    *   `/themes/`: Theme-specific styles.
*   `/utils/`: Shared JavaScript utility modules:
    *   `api.js`: Handles API requests and project data loading.
    *   `dom.js`: Provides DOM manipulation helpers.
    *   `fluid.js`: Encapsulates the WebGL fluid background logic.
    *   `theme.js`: Manages theme switching and persistence.

## 5. Styling and Design Approach

*   **Modular CSS:** Styles are broken down into smaller, manageable files based on their function (base, components, layouts, themes).
*   **Design Tokens:** A comprehensive system defines consistent colors, typography, spacing, and shadows, ensuring visual harmony.
*   **Responsive Design:** Implemented with a mobile-first philosophy and a robust breakpoint system for adaptability across devices.
*   **BEM Methodology:** The Block-Element-Modifier (BEM) naming convention is used for clear, scalable, and maintainable CSS classes.
*   **Theming System:** Supports multiple distinct themes (classic, dark, ghibli) with smooth transitions, allowing users to personalize the interface.

## 6. JavaScript Utilities and Their Roles

*   `api.js`: Provides a generic `fetch` wrapper with error handling and specific functions for loading project data from `projects.json`.
*   `dom.js`: Offers a collection of helper functions for efficient DOM selection, creation, event handling, and manipulation.
*   `fluid.js`: Contains the `FluidBackground` class, responsible for initializing and rendering the interactive WebGL fluid simulation on the canvas.
*   `theme.js`: Manages the application's themes, including setting, retrieving, and persisting the current theme, and updating the UI accordingly.

## 7. Data Sources

*   `data/projects.json`: The primary source for all project-related metadata, descriptions, images, and links.
*   `versionHistory.md`: Markdown file containing the detailed version history of the frontend application, displayed in a drawer.

## 8. Build Process

Currently, the Frontend v2 is primarily a client-side application. Assets are served directly, and JavaScript modules are loaded via `type="module"` in `index.html`. There is a `config/build.js` file, indicating potential for a future build pipeline (e.g., using Vite or Webpack) for minification, bundling, and optimization, as noted in `upDateChecklist.md`.

## 9. Future Development

As outlined in `versionHistory.md` and `upDateChecklist.md`, future plans include:

*   **User Authentication Integration:** Connecting the frontend login form to a backend API.
*   **Dynamic Content from Backend:** Fetching project data and other content from a server-side API instead of static JSON files.
*   **Admin Panel & CMS:** Development of an administrative interface for managing site content.
*   **PWA Features:** Implementing Progressive Web App capabilities for offline support and installability.
*   **Performance & Testing:** Further optimization and comprehensive automated testing.

This document will be updated as the project evolves to remain a current and accurate reference.