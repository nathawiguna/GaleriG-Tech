import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import gTechLogo from '../assets/navbar/gtech-logo.jpg'
import '../navbar.css';

const NavbarComp = () => {
  return (
    <div>
        <Navbar className='navbar' variant='dark'>
            <img src={gTechLogo} alt='G-Tech Logo' height={40} width={40}  className='ms-5'/>
            <Container>
                <Navbar.Brand>Galeri G-Tech</Navbar.Brand>
                <Nav className='Nav'>
                    <div className='nav-link'>Bergabung</div>
                    <div className='nav-link'>Hubungi</div>
                </Nav>
            </Container>   
        </Navbar>
    </div>
  )
}

export default NavbarComp