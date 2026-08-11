# Student Portfolio — React Practical 1 + Practical 2

## Description

This project extends Practical 1 into **Practical 2: State Management and Routing in React**.
It demonstrates:

- React with Vite
- Reusable functional components
- Parent-to-child props
- React Router with multiple routes
- `useState` for UI state management
- Controlled contact form with live preview

## Technologies

```text
React
Vite
JavaScript
JSX
CSS
react-router-dom
```

## Components

- Header
- NavBar
- About
- Skills
- Projects
- Footer

## Pages

- Home
- ProjectsPage
- Contact
- NotFound

## Installation

```bash
npm install
npm run dev
```

## Component Architecture

```text
App.jsx
├── NavBar.jsx
├── Routes
│   ├── "/" → Home.jsx
│   │            ├── Header.jsx
│   │            ├── About.jsx
│   │            └── Skills.jsx
│   ├── "/projects" → ProjectsPage.jsx
│   │                   └── Projects.jsx
│   ├── "/contact" → Contact.jsx
│   └── "*" → NotFound.jsx
└── Footer.jsx
```

## Props Flow

- `App.jsx` → `Home.jsx`: `name`, `rollNumber`, `themeColor`, `bio`, `skills`
- `Home.jsx` → `Header.jsx`: `name`, `rollNumber`, `themeColor`
- `Home.jsx` → `About.jsx`: `bio`
- `Home.jsx` → `Skills.jsx`: `skillList`
- `App.jsx` → `ProjectsPage.jsx`: `projects`
- `ProjectsPage.jsx` → `Projects.jsx`: `projects`
- `App.jsx` → `Contact.jsx`: `defaultMessage`
- `App.jsx` → `Footer.jsx`: `email`, `githubUrl`, `linkedinUrl`, `name`

## Practical 2 Features

- React Router setup using `BrowserRouter`
- Route definitions using `Routes` and `Route`
- Navigation with `NavLink`
- Active route highlight
- Controlled contact form input
- Live message display
- Live character count
- Visibility toggle (`Need Help?`)
- Dark/light mode toggle using `useState`
- 404 Not Found page with React Router `Link`

## Routes

```text
/           → Home
/projects   → ProjectsPage
/contact    → Contact
*           → Not Found
```

## State Management

- `message`: controls Contact message input and live preview
- `showHelp`: toggles help text visibility on Contact page
- `darkMode`: toggles root app class for dark/light theme

## Learning Outcome

This project demonstrates React component architecture, data flow with props, multi-page navigation without reload, and meaningful state updates using `useState`.
