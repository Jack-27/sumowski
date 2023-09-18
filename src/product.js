import React from 'react';
import { Carousel } from 'bootstrap';
import Slide from './carousel';
import Slide2 from './carouselPhone';



export default function Product({
    name,
    price,
    descr,
    id,
    decimalPrice,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
}) 
{
    
  return (
    <div>
        <div className="row">
          <div className='col-md-1'></div>
          <div className="col-md-5 my-3 d-none d-md-block">
          <Slide 
              pic1={pic1}
              pic2={pic2}
              pic3={pic3}
              pic4={pic4}
              pic5={pic5}
              pic6={pic6} />
          </div>
          <div className="col-md-5 my-3 d-md-none">
          <Slide2 
              pic1={pic1}
              pic2={pic2}
              pic3={pic3}
              pic4={pic4}
              pic5={pic5}
              pic6={pic6} />
          </div>

          
          <div className='col-md-1'></div>
          <div className='col-md-4'>
              <div className='bg-white my-4'>
                <h1 className=' my-3 aleoBold'>{name}</h1>
                <p className='lead '>{descr.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</p>
              </div>
              <button className="snipcart-add-item btn btn-outline-dark bg-white my-3"
                data-item-id={id}
                data-item-price={decimalPrice}
                data-item-description='Thank you for your purchase!'
                data-item-image={pic1}
                data-item-name={name}
                data-item-max-quantity='2'
                data-item-url="https://sumowski.art/products.json">
                Add to cart ${price}
              </button>
          </div>
          <div className='col-md-1'></div>
        </div>

    </div>
  

  );
}