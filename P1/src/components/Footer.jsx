function Footer({ email, phone, location, githubUrl, linkedinUrl, name }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="portfolio-footer section-anchor" id="contact">
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      {phone && <p>Phone: {phone}</p>}
      {location && <p>Location: {location}</p>}
      {(githubUrl || linkedinUrl) && (
        <p className="social-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {githubUrl && linkedinUrl ? ' | ' : ''}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </p>
      )}
      <p>&copy; {currentYear} {name} Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer
