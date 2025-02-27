import React from 'react';
import './Navbar.css';
import logo from '../../assets/faravi_logo.JPG';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#about">About me</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#service">Service</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#work">Portfolio</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      <div className="nav-connect-wrapper">
        <a
          href="https://www.linkedin.com/in/md-shakawat-hossain-faravi-1876bb211/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-connect"
        >
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
