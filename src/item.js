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
            frontPic={ item.frontPic}
            backPic={item.backPic}
            descr={item.descr}
            wearFrontPic={item.wearFrontPic}
            wearBackPic={item.wearBackPic}
            id={item.id}
            decimalPrice={item.decimalPrice}
            closeFrontPic={item.closeFrontPic}
            closeBackPic={item.closeBackPic}
        />
      
            )
        }
      </div>
    );
}