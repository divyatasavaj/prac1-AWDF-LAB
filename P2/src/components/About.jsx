import { useEffect } from 'react'

function About({ bio }) {
  useEffect(() => {
    console.log('About loaded')
  }, [])

  return (
    <section className="portfolio-section section-anchor" id="about" aria-labelledby="about-heading">
      <h3 id="about-heading">About Me</h3>
      <p>{bio}</p>
    </section>
  )
}

export default About
