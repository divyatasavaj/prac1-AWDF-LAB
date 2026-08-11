import { Link } from 'react-router-dom'

function NotFound() {
  console.log("NotFound loaded")
  return (
    <main className="portfolio-main">
      <section className="portfolio-section not-found" aria-labelledby="not-found-heading">
        <h2 id="not-found-heading">404</h2>
        <h3>Page Not Found</h3>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="home-link-button">
          Back to Home
        </Link>
      </section>
    </main>
  )
}

export default NotFound
