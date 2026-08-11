import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const studentName = 'Divyata'
  const rollNumber = '24CS091'
  const bio = '5th sem CSE student.'
  const email = 'divyatasavaj@gmail.com'
  const skills = ['HTML', 'CSS', 'JavaScript', 'React']
  const githubUsername = 'divyatasavaj'
  const githubUrl = 'https://github.com/divyatasavaj'
  const linkedinUrl =
    'https://www.linkedin.com/in/divyata-savaj-ab8b2631a?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  const preferredThemeColor = '#374151'
  const contactIntro = 'Feel free to message me for collaboration'
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'portfolio-app dark-mode' : 'portfolio-app'}>
      <div className="portfolio">
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
          <Route path="/projects" element={<ProjectsPage githubUsername={githubUsername} />} />
          <Route path="/contact" element={<Contact defaultMessage={contactIntro} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer email={email} githubUrl={githubUrl} linkedinUrl={linkedinUrl} name={studentName} />
      </div>
    </div>
  )
}

export default App
