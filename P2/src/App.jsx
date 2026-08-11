import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function RouteLogger() {
  const location = useLocation()
  useEffect(() => {
    console.log(
      `%c[React Router P2] Active Route Changed: ${location.pathname}`,
      'color: #4f46e5; font-weight: bold; background: #e0e7ff; padding: 4px 8px; border-radius: 4px;'
    )
  }, [location.pathname])
  return null
}

function App() {
  const studentName = 'Divyata'
  const rollNumber = '24CS091'
  const bio = '5th sem CSE student.'
  const email = 'divyatasavaj@gmail.com'
  const skills = ['HTML', 'CSS', 'JavaScript', 'React']
  const projects = [
    {
      title: 'School Management System',
      description: 'For data management.',
    },
    {
      title: 'Interspar',
      description: 'For interview practice.',
    },
    {
      title: 'Photobooth',
      description: 'Polaroids and vintage photos.',
    },
  ]
  const githubUrl = 'https://github.com/divyatasavaj'
  const linkedinUrl =
    'https://www.linkedin.com/in/divyata-savaj-ab8b2631a?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  const preferredThemeColor = '#374151'
  const contactIntro = 'Feel free to message me for collaboration'
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'portfolio-app dark-mode' : 'portfolio-app'}>
      <div className="portfolio">
        <RouteLogger />
        <NavBar
          name={studentName}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={studentName}
                rollNumber={rollNumber}
                themeColor={darkMode ? '#111827' : preferredThemeColor}
                bio={bio}
                skills={skills}
              />
            }
          />
          <Route path="/projects" element={<ProjectsPage projects={projects} />} />
          <Route path="/contact" element={<Contact defaultMessage={contactIntro} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer email={email} githubUrl={githubUrl} linkedinUrl={linkedinUrl} name={studentName} />
      </div>
    </div>
  )
}

export default App
