import React from 'react';
import logo from './pictures/logo.png'
import dan1 from './pictures/danny devito/devito1.jpg'
import dan2 from './pictures/danny devito/devito 2.jpg'
import dan3 from './pictures/danny devito/images.jpg'
import dan4 from './pictures/danny devito/images (1).jpg'
import dan5 from './pictures/danny devito/images (2).jpg'
import dan6 from './pictures/danny devito/penguin1.jpg'




export default function Home2() {
  return (

    <div>
        <div className='row'>
            <div className='text-center'> 
                    <img src= {logo} height='500px' className=' mx-auto d-none d-md-block'/>
                    <img src= {logo} height='70px' className=' mx-auto d-md-none'/> 
            </div> 
            <div className='col-md-3 col-sm-0'></div>
            <div className='col-md-6 col-sm-12'>
                
                <div className='mt-5 mb-1'>
                    <h2 className='aleoBold text-center'>Some Cheesy Quote or Something or Other</h2>
                    <p className='text-end'>- Jack Franklin</p>
                </div>
            </div>
            
            <div className='col-md-3 col-sm-0'></div>
            <div className='text-center mb-3'>
                <h2>Fall Collection</h2>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-10 d-flex flex-wrap justify-content-around'>
                <img src={dan1} className='homePic m-3'/>
                <img src={dan2} className='homePic m-3'/>
                <img src={dan3} className='homePic m-3'/>
                <img src={dan4} className='homePic m-3'/>
                <img src={dan5} className='homePic m-3'/>
                <img src={dan6} className='homePic m-3'/>
            </div>
            <div className='col-md-1'></div>
       </div>
    </div>


  )
}