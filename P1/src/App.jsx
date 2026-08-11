import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

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
  const themeColor = '#374151'

  return (
    <div className="portfolio">
      <NavBar />
      <Header name={studentName} rollNumber={rollNumber} themeColor={themeColor} />
      <main className="portfolio-main">
        <About bio={bio} />
        <Skills skillList={skills} />
        <Projects projects={projects} />
      </main>
      <Footer email={email} githubUrl={githubUrl} linkedinUrl={linkedinUrl} name={studentName} />
    </div>
  )
}

export default App
