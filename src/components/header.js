import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
import React from 'react'

export const header = () => {
  return (
    <div>
       <div className="header">
<div>
 <ul>
 <li>
 <a href="/Home">Home</a>
 </li>
 <li>
 <a href="/industries">Industries</a>
 </li>
 <li>
 <a href="/aboutus">About Us</a>
 </li>
 <li>
 <a href="/contact">Contact Us</a>
 </li>
 </ul>
</div>      
    </div>
    </div>
  )
}
