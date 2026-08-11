import { useEffect, useState } from 'react'
import Projects from '../components/Projects'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

function ProjectsPage({ githubUsername, repoLimit }) {
  console.log("Projects loaded")

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchRepositories = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`)
      if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`)
      }

      const data = await response.json()
      const sortedRepos = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepos(sortedRepos)
    } catch (fetchError) {
      setError(fetchError.message || 'Unable to load repositories. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Fetch repositories when the Projects page first mounts.
  useEffect(() => {
    fetchRepositories()
  }, [])

  const displayedRepos = repoLimit ? repos.slice(0, repoLimit) : repos
  const filteredRepos = displayedRepos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="portfolio-main">
      <section className="portfolio-section" aria-labelledby="projects-page-heading">
        <h3 id="projects-page-heading">Projects</h3>
        <p>GitHub repositories for @{githubUsername}</p>

        <div className="repo-search-wrap">
          <label htmlFor="repo-search">Search repositories</label>
          <input
            id="repo-search"
            type="text"
            placeholder="Search repositories..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </section>

      {loading && <LoadingSpinner message="Loading repositories..." />}

      {!loading && error && (
        <ErrorMessage
          message={`Unable to load repositories. ${error}`}
          onRetry={fetchRepositories}
          retryLabel="Retry"
        />
      )}

      {!loading && !error && repos.length === 0 && (
        <section className="portfolio-section">
          <p>No public repositories found.</p>
        </section>
      )}

      {!loading && !error && repos.length > 0 && filteredRepos.length === 0 && (
        <section className="portfolio-section">
          <p>No repositories found matching your search.</p>
        </section>
      )}

      {!loading && !error && filteredRepos.length > 0 && <Projects repos={filteredRepos} />}
    </main>
  )
}

export default ProjectsPage
