function ErrorMessage({ message, onRetry, retryLabel = 'Retry' }) {
  return (
    <section className="portfolio-section error-state" role="alert">
      <p>{message}</p>
      <button type="button" className="retry-button" onClick={onRetry}>
        {retryLabel}
      </button>
    </section>
  )
}

export default ErrorMessage
