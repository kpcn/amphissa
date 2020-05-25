import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaBars } from 'react-icons/fa'
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg align-content-center px-0">
          <Link className="navbar-brand logo" to="/">
            {siteTitle}
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
  
          <div className={`collapse navbar-collapse ${isOpen && 'collapse show'}`} id="menu">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" stripHash>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link ips" to="/#features" stripHash title="Features">
                  Features
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link ips" to="/#about-us" stripHash title="About us">
                  About
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link ips" to="/#whats-new" stripHash title="What's new">
                  What's New
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
