import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import gTechLogo from '../assets/navbar/gtech-logo.jpg'
import '../navbar.css';

const NavbarComp = () => {
  return (
    <div>
        <Navbar className='navbar-outer' variant='dark'>
          <div className='navbar-cont'>
          <Nav>
              <img src={gTechLogo} alt='G-Tech Logo' height={40} width={40}  className='ms-3'/>
              <Navbar.Brand>Galeri G-Tech</Navbar.Brand>
            </Nav>

            <Nav className='Nav me-4'>
              <div className='nav-link'>Gabung</div>
              <div className='nav-link'>Hubungi</div>
            </Nav>
          </div>
        </Navbar>
    </div>
  )
}

export default NavbarComp