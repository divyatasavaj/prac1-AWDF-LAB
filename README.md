# React Student Portfolio — Practical Lab Repository

This repository contains the complete progressive implementation of a modern **React + Vite Student Portfolio Application** across three practical modules:

* **Practical 1 (`P1`)**: Component Architecture, Props, and Reusable Layout
* **Practical 2 (`P2`)**: State Management (`useState`), Controlled Forms, and Multi-Page Navigation (`React Router`)
* **Practical 3 (`P3`)**: Asynchronous API Integration (`GitHub REST API`), `useEffect`, Loading/Error States, Retry Capability, and Search Filtering

---

## Master Directory & Component Architecture

```text
student-portfolio/
│
├── P1/                        # Practical 1: Component Architecture & Props
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── README.md
│
├── P2/                        # Practical 2: State Management & React Router
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── README.md
│
├── P3/                        # Practical 3: API Integration & Data Rendering
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── README.md
│
└── README.md                  # Master Repository Documentation
```

---

## Technologies Used

* **Core**: React 18+, Vite, JavaScript (ES6+), JSX
* **Routing**: React Router (`react-router-dom` v6+)
* **API Consumption**: Native Browser `fetch()` API
* **Styling**: Vanilla CSS with Master Design Tokens, Glassmorphism, and Dark Mode Theme Overrides

---

## Key Features by Practical

### Practical 1 (`P1`)
* Functional component decomposition (`Header`, `About`, `Skills`, `Projects`, `Footer`).
* Data passing using React props (`name`, `rollNumber`, `skills`, `projects`).

### Practical 2 (`P2`)
* Multi-page routing (`/`, `/projects`, `/contact`, `*` 404 page) using `BrowserRouter`, `Routes`, and `NavLink`.
* Dark/Light mode theme toggle using `useState`.
* Controlled Contact Form with live character counter, help text visibility toggle, and live input preview.
* Console component load logging.

### Practical 3 (`P3`)
* Asynchronous data fetching from GitHub REST API (`https://api.github.com/users/divyatasavaj/repos`) using `useEffect()` and `fetch()`.
* Four state variables: `repos`, `loading`, `error`, `searchTerm`.
* Reusable `LoadingSpinner.jsx` and `ErrorMessage.jsx` with a non-reloading **Retry button**.
* Real-time case-insensitive repository search bar.
* Dynamic rendering using `.map()` displaying repository names, descriptions, star counts (`⭐`), languages, and external GitHub links (`target="_blank"`).

---

## Local Execution Instructions

To run any practical module locally:

```bash
# Navigate into the desired directory
cd P3    # or cd P1 / cd P2

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

---

## GitHub Repository

* **Repository URL**: [https://github.com/divyatasavaj/prac1-AWDF-LAB.git](https://github.com/divyatasavaj/prac1-AWDF-LAB.git)
* **Branch**: `main`
