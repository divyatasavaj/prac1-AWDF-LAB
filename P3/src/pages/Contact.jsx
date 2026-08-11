import { useState } from 'react'

function Contact({ defaultMessage }) {
  console.log("Contact loaded")

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="portfolio-main">
      <section className="portfolio-section contact-page" aria-labelledby="contact-heading">
        <h3 id="contact-heading">Contact</h3>
        <p>{defaultMessage}</p>

        <button type="button" className="help-button" onClick={() => setShowHelp((prev) => !prev)}>
          Need Help?
        </button>
        {showHelp && (
          <p className="help-text">
            Please fill your name, email, and message. I will get back to you soon.
          </p>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your message"
            rows={5}
          />

          <p className="char-count">Characters: {message.length}</p>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <div className="live-message">
          <h4>Your message:</h4>
          <p>{message || 'Start typing your message above...'}</p>
        </div>
      </section>
    </main>
  )
}

export default Contact
