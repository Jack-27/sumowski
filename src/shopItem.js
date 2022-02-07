import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
// import './AnimalCard.css'


export default function ShopItem({
    name,
    price,
    frontPic,
    backPic
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
                {toggle ? <Link to={'/shop/' +  name } ><img className= "productPic border border-5 border-dark rounded" src = {backPic} width='275px'></img></Link>: <Link to={'/shop/' +  name } ><img className= "productPic border border-5 border-dark rounded" src = {frontPic} width='275px'></img></Link>  }
            </div>
            <div className='text-center'>
                <Button variant='outline-dark' className='mt-2 bg-light' onClick={toggler} >Flip</Button>
                <h2>{ name }</h2>
                <h5>${ price } dollars</h5>
            </div>
        </div>
    </div>
  

  )
}