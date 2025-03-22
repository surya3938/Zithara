import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.body.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setDarkMode(isDark)
  }

  return (
    <nav className="navbar" style={{ 
      padding: '1rem 2rem', 
      borderBottom: '1px solid #ccc', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/" style={{ marginRight: '1rem', fontWeight: 'bold', color: '#4f46e5', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/company-dashboard" style={{ fontWeight: 'bold', color: '#4f46e5', textDecoration: 'none' }}>
          Company Dashboard
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.4rem 0.8rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          background: darkMode ? '#fefefe' : '#111',
          color: darkMode ? '#111' : '#fff',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        🌓
      </button>
    </nav>
  )
}

export default Navbar
