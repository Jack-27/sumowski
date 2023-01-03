import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import logo from './pictures/websiteLogo.png'


export default function JackNav() {
    return (
        <div>

            <Navbar expand='lg' collapseOnSelect > 
            <div className=''>
                <Navbar.Brand>
                    <Link to='/' >                 
                        <img src= {logo} height='100px' className='logo d-lg-none'/> 
                    </Link>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle className='mx-3'/>
            <Navbar.Collapse>
                <Nav className='w-100 mx-auto'>
                    <div className='row w-100'>
                        <div className='col-3'></div>
                        <div className='col-6 text-center'>
                        <Link to='/' > <img src= {logo} height='150px' className=' mx-auto logo d-none d-lg-block'/></Link>
                        </div>
                        <div className='col-3'>
                            <Nav.Link eventKey="1"><Link  className= 'px-2 nav-link' to='/shop' ><h3 className="text-black poultrygheist navLinkFont center-text">Shop</h3></Link></Nav.Link>
                            <Nav.Link eventKey="2"><Link  className= 'px-2 nav-link' to='/contactUs' ><h1 className="text-black poultrygheist navLinkFont">Contact Us</h1></Link></Nav.Link>
                        </div>
                    </div>                   
                                   </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <hr className="solid my-1"></hr>
        <div className='py-2'></div>
      </div>
    )
}