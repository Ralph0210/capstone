import React from 'react'
import { ReactComponent as Logo } from "../../assets/Logo.svg"
import "./footer.css"

const Footer = () => {
  return (
    <footer className='section__padding'>
            <div className="logo">
                <Logo/>
            </div>
            <div className='links'>
            <ul className="navigation" tabIndex={0}>
                <li tabIndex={0}>Doormat Navigtaion</li>
                <li tabIndex={0}>Home</li>
                <li tabIndex={0}>About</li>
                <li tabIndex={0}>Menu</li>
                <li tabIndex={0}>Reservations</li>
                <li tabIndex={0}>Order Online</li>
                <li tabIndex={0}>Login</li>
            </ul>
            <ul className="contact" tabIndex={0}>
                <li tabIndex={0}>Contact</li>
                <li tabIndex={0}>Address</li>
                <li tabIndex={0}>Phone Number</li>
                <li tabIndex={0}>Email</li>
            </ul>
            <ul className="socialMediaLinks" tabIndex={0}>
                <li tabIndex={0}>Social Media Links</li>
                <li tabIndex={0}>Address</li>
                <li tabIndex={0}>Phone Number</li>
                <li tabIndex={0}>Email</li>
            </ul>
            </div>
        </footer>
  )
}

export default Footer