import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NavBar.css' 

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="幼幼社 Logo" className="logo-img" />
        <span className="logo-text">幼幼社</span>
      </div>
      <div className="nav-links">
        <Link to="/">首頁</Link>
        <Link to="/members">社團成員</Link>
        <Link to="/activities">活動簡介</Link>
      </div>
    </nav>
  )
}

export default NavBar
