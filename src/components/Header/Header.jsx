import React from 'react'
import {Link} from 'gatsby';

export const Header = () => {
  return (
    <div className="header">
    <div>ERAINTERFACES</div>
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
  )
}
export default Header