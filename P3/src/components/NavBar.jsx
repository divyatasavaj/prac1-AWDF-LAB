import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function NavBar({ darkMode, onToggleDarkMode, name }) {
  return (
    <nav className="portfolio-nav" aria-label="Portfolio navigation">
      <div className="portfolio-nav-inner">
        <p className="portfolio-brand">{name}</p>
        <button type="button" className="mode-toggle" onClick={onToggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
