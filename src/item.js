import React from 'react';
import data from './itemData';
import Product from './product';
import { useParams} from 'react-router-dom';


export default function Item() {
    
    let {name} = useParams();
    const product = data.filter(item => item.name == name);

    return (
      <div>
        {
          product.map(item => 
            <Product 
            key={item.name}
            name={item.name}
            price={item.price}
            descr={item.descr}
            id={item.id}
            decimalPrice={item.decimalPrice}
            pic1={ item.pic1}
            pic2={item.pic2}
            pic3={item.pic3}
            pic4={item.pic4}
            pic5={item.pic5}
            pic6={item.pic6}
        />
      
            )
        }
      </div>
    );
}