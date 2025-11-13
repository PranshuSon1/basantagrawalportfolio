# Copilot Instructions for AI Coding Agents

## Project Overview
- This project is a hybrid React/Next.js portfolio and content site, originally bootstrapped with Create React App, now using a Next.js app directory structure under `app/`.
- Major content sections (home, about, news, media center, contact, admin, etc.) are implemented as subfolders in `app/`, each with its own `page.js`.
- Legacy React code (pre-migration) is in `src/`, including reusable components, context, and service modules.

## Key Architectural Patterns
- **Routing:** Next.js app directory routing (`app/`) is used for new pages. Each subfolder with `page.js` is a route.
- **Styling:** Global styles in `app/globals.css`. Some legacy styles in `src/App.css` and `src/index.css`.
- **Component Reuse:** UI components are in `src/components/` (e.g., `ImageSlider.js`, `NabBarComponent.js`).
- **State/Context:** Auth logic is in `src/context/AuthContext.js` and used by `ProtectedRoute.js`.
- **API Integration:** Service modules in `src/services/` (`api.js`, `authService.js`, `newsService.js`) handle backend/API calls. See `API_INTEGRATION.md` for details.

## Developer Workflows
- **Development:**
  - Use `npm start` to run the app (default: React scripts, may need migration for Next.js features).
  - For Next.js-specific features, use `next dev` if configured in `package.json`.
- **Build:**
  - `npm run build` creates a production build in `build/`.
- **Testing:**
  - `npm test` runs tests in watch mode (legacy CRA setup).
- **Static Assets:**
  - Public assets are in `public/` and `build/static/`.

## Project-Specific Conventions
- **Migration:** The project is in transition from Create React App to Next.js. Prefer new code in `app/` and migrate old code from `src/` as needed.
- **Component Naming:** Use PascalCase for components. Place reusable components in `src/components/`.
- **Service Pattern:** API logic is abstracted in `src/services/`. Always use these modules for network calls.
- **Auth:** Use `AuthContext` and `ProtectedRoute` for authentication/authorization logic.

## Integration Points
- **External APIs:** All API calls should go through `src/services/api.js` or related service modules.
- **Social Embeds:** Social media iframes and widgets are in `SocialLinksSection.js`.
- **Admin/Protected Routes:** Use `ProtectedRoute.js` and `AuthContext.js` for access control.

## References
- See `API_INTEGRATION.md` for backend/API details.
- See `MIGRATION_NOTES.md` for migration status and tips.
- See `README.md` for basic scripts and setup.
- Key folders: `app/`, `src/components/`, `src/services/`, `src/context/`, `public/`, `build/`.

---

**When in doubt, prefer Next.js conventions for new code, and reference service/context/component patterns from `src/` for legacy integration.**
