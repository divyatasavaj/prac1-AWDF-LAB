import { useEffect } from 'react'

function Projects({ projects }) {
  useEffect(() => {
    console.log('Projects loaded')
  }, [])

  return (
    <section className="portfolio-section section-anchor" id="projects" aria-labelledby="projects-heading">
      <h3 id="projects-heading">Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
