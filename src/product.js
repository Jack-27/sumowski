import React from 'react';
import { Carousel } from 'bootstrap';
import Slide from './carousel';



export default function Product({
    name,
    price,
    frontPic,
    backPic,
    descr
}) 
{
    
  return (
    <div>
        <div className="row">
          <div className='col-md-1'></div>
          <div className="col-md-5">
          <Slide 
              pic1={frontPic}
              pic2={backPic}
              pic3={frontPic}
              pic4={backPic} />
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-4'>
              <h1 className='text-center my-3'>{name}</h1>
              <p className='lead'>{descr}</p>
              <h5> ${price}</h5>
              
          </div>
          <div className='col-md-1'></div>
        </div>

    </div>
  

  );
}