import Projects from '../components/Projects'

function ProjectsPage({ projects }) {
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
