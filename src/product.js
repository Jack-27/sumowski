import React from 'react';
import { Carousel } from 'bootstrap';
import Slide from './carousel';



export default function Product({
    name,
    price,
    frontPic,
    backPic,
    descr,
    id,
    wearFrontPic,
    wearBackPic,
    closeFrontPic,
    closeBackPic,
    decimalPrice
}) 
{
    
  return (
    <div>
        <div className="row">
          <div className='col-md-1'></div>
          <div className="col-md-5 my-3">
          <Slide 
              pic1={frontPic}
              pic2={backPic}
              pic3={wearFrontPic}
              pic4={wearBackPic}
              pic5={closeFrontPic}
              pic6={closeBackPic} />
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-4'>
              <div className='bg-white border border-3 border-dark rounded my-4'>
                <h1 className='text-center my-3'>{name}</h1>
                <p className='lead text-center'>{descr.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</p>
                <h2 className='text-center'> ${price}</h2>
              </div>
              <button className="snipcart-add-item btn btn-outline-dark bg-white my-3"
                data-item-id={id}
                data-item-price={decimalPrice}
                data-item-description='Thank you for your purchase!'
                data-item-image={frontPic}
                data-item-name={name}
                data-item-max-quantity='2'
                data-item-url="https://sumowski.art/products.json">
                Add to cart (${price})
              </button>
          </div>
          <div className='col-md-1'></div>
        </div>

    </div>
  

  );
}