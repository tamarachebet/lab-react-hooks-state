import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      onClick={toggleDarkMode}
      style={{
        padding: '10px 20px',
        backgroundColor: darkMode ? '#333' : '#f0f0f0',
        color: darkMode ? '#f0f0f0' : '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle