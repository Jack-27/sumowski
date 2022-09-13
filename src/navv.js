import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import logo from './pictures/websiteLogo.png'


export default function JackNav() {
    return (
        <div>

            <Navbar bg="myBlack" variant = 'dark' expand='lg' collapseOnSelect > 
            <Navbar.Brand>
                <Link to='/' >
                    <img src= {logo} height='150px' className='logo d-none d-lg-block'/>
                    <img src= {logo} height='50px' className='logo d-lg-none'/>
                </Link>
                
            </Navbar.Brand>
            <Navbar.Toggle className='mx-3'/>
            <Navbar.Collapse>
                <Nav className='ms-auto'>                
                    <Nav.Link eventKey="1"><Link  className= 'px-5 nav-link' to='/shop' ><h1 className="text-white poultrygheist navLinkFont">Shop</h1></Link></Nav.Link>
                    <Nav.Link eventKey="2"><Link  className= 'px-5 nav-link' to='/contactUs' ><h1 className="text-white poultrygheist navLinkFont">Contact Us</h1></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <div className='py-5'></div>
      </div>
    )
}