import React from 'react';
import data from './itemData';
import ShopItem from './shopItem';


export default function Shop() {
  return (
    <div className='row'>
        {data.map(item => (
            <div className='col'><ShopItem 
                key={item.name}
                name={item.name}
                price={item.price}
                frontPic={ item.pic1}
                backPic={item.pic2}
                oneSided={item.oneSided}
            /></div> 
        ))}
    </div>

  )
}