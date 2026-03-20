# UniAuction – Developer Guide

A beginner-friendly guide for contributing to the UniAuction campus auction platform.

---

## 1. Project Overview

**UniAuction** is a campus marketplace where students can:

- List items for auction (textbooks, electronics, furniture, etc.)
- Browse and place bids on auctions
- Connect with other students to complete exchanges

The platform is built with **React + TypeScript + Tailwind CSS** and uses a component-based architecture for maintainability.

---

## 2. Folder Structure Explanation

```
src/
├── components/          # Reusable UI pieces
│   ├── ui/              # Base primitives (Button, Input, Card, etc.)
│   ├── layout/          # Page structure (Navbar, Sidebar, Footer)
│   └── sections/        # Homepage sections (Hero, LiveBids, etc.)
├── pages/               # Full page components
│   └── Home.tsx         # Main homepage
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── constants/           # App constants (categories, config)
├── App.tsx              # Routes and app shell
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind theme
```

| Folder      | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| `components/ui`   | Small, reusable UI building blocks. Use these everywhere.              |
| `components/layout` | Navbar, Sidebar, Footer, MobileHeader. Wraps page content.          |
| `components/sections` | Large blocks for the homepage (Hero, LiveBids, etc.).              |
| `pages`    | Full pages. Each file = one route.                                      |
| `types`    | Shared TypeScript interfaces (e.g. `Auction`, `Category`).              |
| `hooks`    | Reusable logic (e.g. `useAuth`, `useAuctions`).                         |
| `utils`    | Pure helper functions (e.g. `formatPrice`, `formatDate`).               |
| `constants`| Strings and config (e.g. category list).                                |

---

## 3. How to Run the Project

### Prerequisites

- Node.js 18+ 
- npm (comes with Node)

### Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. **Open the app**

   - Frontend: http://localhost:5173
   - If you use the backend, start it separately (e.g. `cd backend && npm run dev`)

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 4. Component Rules

### How to Create a Component

1. Create a new file (e.g. `MyComponent.tsx`).
2. Export a default function component.
3. Define a `Props` interface for TypeScript.
4. Add a short JSDoc comment at the top.

Example:

```tsx
/**
 * MyComponent - Brief description
 * How to use: <MyComponent title="Hello" />
 */
interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### Naming Conventions

| Type        | Convention        | Example            |
|-------------|-------------------|--------------------|
| Components  | PascalCase        | `AuctionCard`      |
| Files       | PascalCase for components | `AuctionCard.tsx` |
| Props       | camelCase         | `currentBid`       |
| Constants   | UPPER_SNAKE_CASE  | `AUCTION_CATEGORIES` |

### Props Usage

- Use TypeScript for all props.
- Prefer specific props over a generic `children` when the shape is known.
- Provide defaults for optional props: `variant = "primary"`.

---

## 5. Tailwind Guidelines

- **No inline styles** – use Tailwind classes only. Inline `style={{}}` is allowed only for one-off cases (e.g. dynamic values).
- **Use design tokens** – we define colors in `index.css` via `@theme`:
  - `bg-primary`, `text-foreground`, `text-muted`, `border-border`, etc.
- **Consistent spacing** – prefer `gap-4`, `p-4`, `mt-6` instead of random values.
- **Responsive** – use `sm:`, `md:`, `lg:` for breakpoints.

---

## 6. Work Division (CRITICAL)

### Developer 1 (Beginner) – UI Components

**Scope:** `src/components/ui/`

- Improve or add: `Button`, `Input`, `Tag`, `Badge`, `Card`
- Tasks:
  - Add new variants (e.g. `Button` variant `"ghost"`).
  - Improve accessibility (aria labels, focus states).
  - Add loading states (e.g. spinner in `Button`).
  - Fix styling inconsistencies.
- Do not change layout, sections, or pages.
- Run `npm run dev` and visually test in isolation.

---

### Developer 2 (Intermediate) – Sections

**Scope:** `src/components/sections/`

- Improve or add: `HeroSection`, `CategoriesBar`, `PromoBanner`, `HowItWorks`
- Tasks:
  - Update copy and layout in each section.
  - Use only UI components from `components/ui`.
  - Add new sections if needed.
  - Connect `CategoriesBar` to real filtering (via props/state).
- Import from `../ui` and `../../constants`.
- Do not change layout structure or core UI components.

---

### Developer 3 (Advanced) – Layout & Integration

**Scope:** `src/components/layout/`, `src/pages/`, integration

- Improve: `Navbar`, `Sidebar`, `MobileHeader`, `Footer`, `LiveBids`
- Tasks:
  - Wire up navigation (React Router).
  - Integrate `LiveBids` with API or mock data.
  - Add auth-aware UI (show user name, logout).
  - Responsive layout and sidebar behavior.
  - Ensure `pages/Home.tsx` composes all sections correctly.
- May need to add hooks in `hooks/` and types in `types/`.

---

## 7. How to Add a New Component

1. Decide where it belongs:
   - `ui/` – small, reusable primitive
   - `layout/` – structural (header, footer, sidebar)
   - `sections/` – homepage content block
2. Create the file, e.g. `src/components/ui/NewButton.tsx`.
3. Add JSDoc and TypeScript props.
4. Implement with Tailwind (use design tokens).
5. Export from the folder index, e.g. `components/ui/index.ts`:

   ```ts
   export { default as NewButton } from "./NewButton";
   ```

6. Import where needed:

   ```tsx
   import { NewButton } from "../components/ui";
   ```

---

## 8. Common Mistakes to Avoid

| Mistake | Why it’s bad | What to do instead |
|--------|---------------|--------------------|
| Duplicate styles | Hard to change later | Use shared components and design tokens |
| Ignoring existing components | Extra code, inconsistent UI | Check `components/ui` before writing new markup |
| Messy, uncommented code | Hard for others to follow | Add short comments, clear names, small functions |
| Inline styles everywhere | Bypasses design system | Prefer Tailwind classes |
| Huge components | Hard to read and test | Split into smaller components |
| Skipping TypeScript for props | Bugs and poor editor support | Define an interface for every component |

---

## Quick Reference

- **Run dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Theme colors:** See `src/index.css` `@theme` block
- **UI components:** `src/components/ui/`
- **Add a page:** Create in `pages/`, add route in `App.tsx`

---

Happy coding. If you’re stuck, check existing components for patterns.
