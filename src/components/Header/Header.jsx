import React from 'react'
import {Link} from 'gatsby'
import headerStyles from './header.module.css'
export const Header = () => {
  return (
    <div >
      <div>ERAINTERFACES</div>
    <div>
    <ul>
    <li>
     <Link to="/industries">Industries</Link>
     </li>
     <li>
     <Link to="/aboutus">About Us</Link>
     </li>
     <li>
     <Link to="/contact">Contact Us</Link>
     </li>
     </ul>
    </div>      
        </div>
  )
}
export default Header