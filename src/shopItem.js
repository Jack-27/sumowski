import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import flip from './pictures/filp.svg';
// import './AnimalCard.css'


export default function ShopItem({
    name,
    price,
    frontPic,
    backPic,
    oneSided
}) 
{
const [toggle, setToggle] = useState(false);

const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
}


    
  return (
    <div className='container-fluid' >
        <div className='row'>
            <div className='col text-center'>
                {toggle ? <Link to={'/shop/' +  name } ><img className= "productPic " src = {backPic} width='275px'></img></Link>: <Link to={'/shop/' +  name } ><img className= "productPic" src = {frontPic} width='275px'></img></Link>  }
            </div>
            <div className='text-center'>
                
                <h2 className='montserratBold'>{ name }</h2>
                <h4 className='montserratReg'> ${ price }   {oneSided ? <Button variant='outline-dark' className=' bg-light flip' onClick={toggler}><img src={flip} width='40px'  alt='flip'/></Button> : <div className='my-4'></div> }</h4>
            </div>
        </div>
    </div>
  

  )
}