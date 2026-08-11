function Header({ name, rollNumber, themeColor }) {
  return (
    <header className="portfolio-header" id="home" style={{ backgroundColor: themeColor }}>
      <p className="portfolio-greeting">Hello, I am</p>
      <h1>{name}</h1>
      <h2>Student Portfolio</h2>
      <p className="roll-number">Roll Number: {rollNumber}</p>
    </header>
  )
}

export default Header
