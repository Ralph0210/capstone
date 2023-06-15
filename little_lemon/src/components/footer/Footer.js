import React from 'react'
import { ReactComponent as Logo } from "../../assets/Logo.svg"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
            <Logo className="logo"/>
            <ul className="navigation">
                <li>Doormat Navigtaion</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul className="contact">
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="socialMediaLinks">
                <li>Social Media Links</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
  )
}

export default Footer