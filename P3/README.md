# Student Portfolio — React Practical 1 + 2 + 3

## Description

This project extends Practical 1 and Practical 2 with **Practical 3: API Integration and Data Rendering**.
It demonstrates:

- React with Vite
- Reusable functional components
- Parent-to-child props
- React Router with multiple routes
- `useState` for UI state management
- Controlled contact form with live preview
- API integration using `fetch()`
- Asynchronous data handling with loading and error UI

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
- LoadingSpinner
- ErrorMessage
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
│   │                   ├── LoadingSpinner.jsx
│   │                   ├── ErrorMessage.jsx
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
- `App.jsx` → `ProjectsPage.jsx`: `githubUsername`, `repoLimit`
- `ProjectsPage.jsx` → `Projects.jsx`: `repos`
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

## Practical 3 — API Integration

Practical 3 adds real API-based repository rendering on the Projects route:

- Uses GitHub REST API for public repositories
- Uses `fetch()` for API calls
- Uses `useEffect()` for initial fetch on page mount
- Uses `useState()` for async state management
- Handles loading state with `LoadingSpinner`
- Handles error state with `ErrorMessage`
- Supports retry without full page reload
- Supports repository search/filter by name
- Shows repository name, description, stars, language, and GitHub link

## API Used

GitHub REST API:

```text
https://api.github.com/users/<github-username>/repos
```

## Practical 3 State Variables

- `repos`: stores fetched repository data
- `loading`: tracks whether the API request is in progress
- `error`: stores API error messages
- `searchTerm`: stores repository search text

## API Flow

```text
Projects page mounts
        ↓
useEffect runs
        ↓
fetch() sends API request
        ↓
loading state shown
        ↓
API response received
        ↓
Success → repository list
Error   → error message + retry
```

## Learning Outcome

This project demonstrates React component architecture, data flow with props, multi-page navigation without reload, and meaningful state updates using `useState`.
