import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 470 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={showMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0}
          duration={500}
        >Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-220}
          duration={500}
        >Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}
          duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-220}
          duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-220}
          duration={500}>testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-220}
          duration={500}>contact us</Link></li>
      </ul>
      {showMenu ? <MdOutlineClose className='close-svg' width={30} onClick={toggleMenu} /> :
        <img src={menu_icon} alt="" className='menu-icon'
          onClick={toggleMenu}/>}
        
    </nav>
  )
}

export default Navbar