import {React, useState } from 'react'
import { ReactComponent as Logo } from "../../assets/Logo.svg"
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Nav = () => (
    <ul className="nav_list">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to="/booking">Reservation</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
  )

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav>
      <div className='logo_container'>
        <Logo className='logo'/>
      </div>
      <div className='nav_list_container'>
        <Nav />
      </div>
      <div className='navbar_menu'>
        {toggleMenu
        ? <RiCloseLine color='#495e57' size={20} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#495e57' size={20} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && <div className='navbar_menu_nav_list scale-up-tr'>
          <Nav />
        </div>}
      </div>
    </nav>
  )
}

export default Navbar