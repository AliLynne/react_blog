import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">AliLynne</a>
          <ul className="right">
            <li><NavLink to="/">Link</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
