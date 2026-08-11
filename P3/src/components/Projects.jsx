function Projects({ repos, onRepoClick }) {
  return (
    <section className="portfolio-section section-anchor" id="projects" aria-labelledby="projects-heading">
      <h3 id="projects-heading">Repository Showcase</h3>
      <div className="projects-grid">
        {repos.map((repo) => (
          <article key={repo.id} className="project-card">
            <h4>{repo.name}</h4>
            <p>{repo.description || 'No description available'}</p>
            <p className="repo-meta">⭐ Stars: {repo.stargazers_count}</p>
            <p className="repo-meta">Language: {repo.language || 'Not specified'}</p>
            <a
              href={repo.html_url}
              onClick={(e) => onRepoClick && onRepoClick(repo, e)}
              className="repo-link"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
