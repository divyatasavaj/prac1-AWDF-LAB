import { useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

function Home({ name, rollNumber, themeColor, bio, skills }) {
  useEffect(() => {
    console.log('Home loaded')
  }, [])

  return (
    <>
      <Header name={name} rollNumber={rollNumber} themeColor={themeColor} />
      <main className="portfolio-main">
        <About bio={bio} />
        <Skills skillList={skills} />
      </main>
    </>
  )
}

export default Home
