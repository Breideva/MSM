import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import logo from "../assets/other-imgs/Logo.png"

export const Navbar = () => {
  return (
   <>
   <div className="nav">
        <ul className="nav-items">
            <li><Link className="list-item" to='/services'>Services</Link></li>
            <li><Link className="list-item" to='/about'>About</Link></li>
            <li><Link className="list-item" to='/'><img src={logo} alt="logo"/></Link></li>
            <li><Link className="list-item" to='/contact'>Contact</Link></li>
            <li><Link className="list-item" to='/projects'>Projects</Link></li>
        </ul>
        
   </div>
   </>
  )
}

