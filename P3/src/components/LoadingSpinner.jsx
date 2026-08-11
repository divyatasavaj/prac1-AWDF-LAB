function LoadingSpinner({ message }) {
  return (
    <section className="portfolio-section loading-state" aria-live="polite">
      <div className="spinner" />
      <p>{message}</p>
    </section>
  )
}

export default LoadingSpinner
