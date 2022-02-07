import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import logo from './pictures/websiteLogo.jpg'


export default function JackNav() {
    return (
        <div>

            <Navbar bg="myBlack" variant = 'dark' >
            <Navbar.Brand>
                <Link to='/' >
                    <img src= {logo} height = '150px' className='logo'/>
                </Link>
                
            </Navbar.Brand>
            <Nav className='ms-auto'>                
                <Link className= 'px-5 nav-link' to='/shop' ><h1 class="text-white">Shop</h1></Link>
                <Link className= 'px-5 nav-link' to='/contactUs' ><h1 class="text-white">Contact Us</h1></Link>
            </Nav>
        </Navbar>
        <div className='py-5'></div>
      </div>
    )
}