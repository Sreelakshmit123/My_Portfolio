import React from 'react'
import './Header.css'
import logo from '../assets/images/portfolio-logo.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    

      <Navbar collapseOnSelect expand="lg" className='navbar-header' >
        <Container className='header'>
          <Navbar.Brand><Link to={'/'} className='logo animate__animated animate__fadeInLeft '><img className='logo' src={logo} alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <nav className='nav animate__animated animate__pulse'>
                <Link to={'/'} className='nav' style={{color:' rgb(242, 97, 6)'}}>Home</Link>
                <a href='#aboutme' className='nav'>About me</a>
                <a href='#skills' className='nav'>Skills</a>
                <a href='#projects' className='nav'>Projects</a>
                <a href='#contactme' className='nav'>Contact</a>
                         
              </nav>
              <nav className='nav animate__animated animate__pulse'>
              <a target='_blank' href='https://www.linkedin.com/in/sreelakshmi-t-49b402266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin-in  text-light fs-3"></i>     </a>
              <a target='_blank' href='https://github.com/Sreelakshmit123'><i class="fa-brands fa-github text-light  fs-3"></i></a>
              </nav>    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header