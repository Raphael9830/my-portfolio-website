<<<<<<< HEAD
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

=======
import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAHPY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><BsFacebook/></a>
        <a href="https://www.instagram.com"><BsInstagram/></a>
        <a href="https://www.twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 RAPHY'S Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

>>>>>>> 726f23574d932696a17a462634994b33d6be90cd
export default Footer