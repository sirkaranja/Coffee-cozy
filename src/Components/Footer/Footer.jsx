import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="logo-sec">
        <h3><span id='logo-c'>C</span>offee Cozy</h3>
           <p>Lorem ipsum dolor sit<br/>
             amet, consectetur <br/>
             adipiscing elit. Mauris </p>
        </div>
        <div className="link1">
            <h4>Useful links</h4>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
        </div>
        <div className="link1">
            <h4>Main Menu</h4>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
        </div>
        <div className="link1">
            <h4>Contact Us</h4>
            <li>example@email.com</li>
            <li>0798343427</li>
            <li>Social media</li>
        </div>
    </div>
     <div className="copyright">
     <p>Copyright &copy; 2024 Coffee Cozy. All rights reserved.</p>
   </div>
   </>
  )
}

export default Footer