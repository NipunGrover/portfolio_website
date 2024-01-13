import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";

import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon-1.svg';
import navIcon2 from '../assets/images/nav-icon-2.svg';
import navIcon3 from '../assets/images/nav-icon-3.svg';


/*
 * NavBar component - represents the navigation bar of the application.
 */
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if(window.scrollY > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
      {/* Brand logo */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <img src={logo} alt="Logo"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

         {/* Main navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ marginRight: '1rem' }} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills" style={{ marginRight: '1rem' }} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ marginRight: '1rem' }} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          {/*this is where all the social media icons will be */}
            <div className="social-icon">
              <a href="#"><img src={navIcon1}/></a>
              <a href="#"><img src={navIcon2}/></a>
              <a href="#"><img src={navIcon3}/></a>
            </div>
            {/*console log is just to be replaced later on for actual navigation to the contact form on our application*/}
            <button className="vvd" onClick={() => console.log('connect')}/>
            <span>Let's Connect</span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
