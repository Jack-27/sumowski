import React from 'react';
import data from './shopData';
import ShopItem from './shopItem';


export default function Shop() {
  return (
    <div className='row'>
        {data.map(item => (
            <div className='col'><ShopItem 
                key={item.name}
                name={item.name}
                price={item.price}
                frontPic={ item.frontPic}
                backPic={item.backPic}
            /></div> 
        ))}
    </div>

  )
}