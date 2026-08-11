# Student Portfolio — React Practical 1

## Description

This project is built for **Practical 1: Introduction to React and Component Architecture**.
It demonstrates:

- React with Vite
- Functional components
- Component architecture
- Props
- Dynamic rendering with `.map()`
- Reusable components

## Technologies

```text
React
Vite
JavaScript
JSX
CSS
```

## Components

- Header
- About
- Skills
- Projects
- NavBar
- Footer

## Installation

```bash
npm install
npm run dev
```

## Component Architecture

```text
App.jsx
├── NavBar.jsx
├── Header.jsx
├── About.jsx
├── Skills.jsx
├── Projects.jsx
└── Footer.jsx
```

## Props Flow

- `App.jsx` → `Header.jsx`: `name`, `rollNumber`, `themeColor`
- `App.jsx` → `About.jsx`: `bio`
- `App.jsx` → `Skills.jsx`: `skillList`
- `App.jsx` → `Projects.jsx`: `projects`
- `App.jsx` → `Footer.jsx`: `email`, `githubUrl`, `linkedinUrl`, `name`

## Learning Outcome

This project shows how to build a clean single-page UI using reusable functional components and parent-to-child data flow with props in React.
