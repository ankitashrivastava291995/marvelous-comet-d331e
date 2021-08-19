import React from 'react'
import {Link} from 'gatsby';

export const Header = () => {
  return (
    <div className="header">
    <div>ERAINTERFACES</div>
    <div>
     <ul>
     <li>
     <Link href="/Home">Home</Link>
     </li>
     <li>
     <Link href="/industries">Industries</a>
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