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

  const fetchRepositories = async (forceError = false) => {
    try {
      setLoading(true)
      setError(null)

      const usernameToFetch = forceError ? `${githubUsername}_invalid_repo_user_404` : githubUsername
      const response = await fetch(`https://api.github.com/users/${usernameToFetch}/repos`)

      if (!response.ok) {
        console.error(`GET https://api.github.com/users/${usernameToFetch}/repos ${response.status} (Not Found)`)
        throw new Error(`HTTP ${response.status}: Unable to fetch git repos`)
      }

      const data = await response.json()
      const sortedRepos = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepos(sortedRepos)
    } catch (fetchError) {
      console.error('GET error fetching repositories:', fetchError)
      setError('Unable to fetch git repos. ' + (fetchError.message || 'Please try again.'))
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
          <div className="search-row" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              id="repo-search"
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              style={{ flex: '1', minWidth: '200px' }}
            />
            <button
              type="button"
              className="retry-button"
              style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}
              onClick={() => fetchRepositories(true)}
              title="Test GET Error Flow"
            >
              Test Error Flow
            </button>
          </div>
        </div>
      </section>

      {loading && <LoadingSpinner message="Loading repositories..." />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={() => fetchRepositories(false)}
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
