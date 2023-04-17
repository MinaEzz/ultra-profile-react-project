import React from 'react'
import "./style.css"
import {Navbar, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <Navbar expand="lg" className='fixed-top'>
    <div className='container'>
        <Navbar.Brand className='logo'> 
        <Link to={'/'}>
        <img src="Assets/logo.png" alt='logo' draggable='false'></img>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='nav-links justify-content-end'>
          <Nav.Link>
            <HashLink to={'/#home'} className="nav-link">Home</HashLink>
          </Nav.Link> 
          <Nav.Link>
            <HashLink to={'/#work'} className="nav-link">services</HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to={'/#portfolio'} className="nav-link">Portfolio</HashLink>
          </Nav.Link>
            <Nav.Link>
            <HashLink to={'/#profile'} className="nav-link">profile</HashLink>
            </Nav.Link>
            <Nav.Link>
            <HashLink to={'/#about'} className="nav-link">about</HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to={'/#social-media'} className="nav-link">social media</HashLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={'/contact'} className="nav-link">contact me</NavLink>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </div> 
    {/* ./container */}
</Navbar>
  )
}

export default NavBar