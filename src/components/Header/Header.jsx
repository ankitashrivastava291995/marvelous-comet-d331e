import React from 'react'
import {Link} from 'gatsby';

export const Header = () => {
  return (
    <div className="header">
    <div>ERAINTERFACES</div>
    <div>
     <ul>
     <li>
     <Link href="/">Home</Link>
     </li>
     <li>
     <Link to="/industries">Industries</Link>
     </li>
     <li>
     <Link href="/aboutus">About Us</Link>
     </li>
     <li>
     <Linka href="/contact">Contact Us</Link>
     </li>
     </ul>
    </div>      
        </div>
  )
}
export default Header