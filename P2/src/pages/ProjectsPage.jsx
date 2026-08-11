import { useEffect } from 'react'
import Projects from '../components/Projects'

function ProjectsPage({ projects }) {
  useEffect(() => {
    console.log('[P2 Navigation] Mount: Projects Page (/projects)', { projectCount: projects?.length || 0 })
  }, [projects])

  return (
    <main className="portfolio-main">
      <section className="portfolio-section" aria-labelledby="projects-page-heading">
        <h3 id="projects-page-heading">Projects</h3>
        <p>Here are my practical and personal projects.</p>
      </section>
      <Projects projects={projects} />
    </main>
  )
}

export default ProjectsPage
