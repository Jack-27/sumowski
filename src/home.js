import React from 'react';
import skateclip from './pictures/IMG_0140.mov'
import Photo3 from './pictures/jack.JPG'
import Photo1 from './pictures/trippsquare.JPG'
import Photo2 from './pictures/Untitled_Artwork.jpg'
import anim from './pictures/finalGif.gif'



export default function Home() {
  return (
      <div>
        <div className='text-center'> 
          <img src= {anim} height='230px' className=' mx-auto d-none d-md-block'/>
          <img src= {anim} height='70px' className=' mx-auto d-md-none'/> 
       </div>
        

        <div className='row'>
          <div className='col-md-1 col-sm-0'></div>
          <div className='col-md-10 col-sm-12'>
            <p className='text-center m-5 not-bold d-none d-lg-block' >
            We are a Denver based clothing and skateboarding collective, committed to bringing artists together to help realize unique ideas. 

          </p>  
          <p className='text-center mx-1 my-5  d-lg-none small-boi' >
          We are a Denver based clothing and skateboarding collective, committed to bringing artists together to help realize unique ideas. 
          </p>  
          </div>
          <div className='col-md-1 col-sm-0'></div>
        </div>

        <div className='box'>
          <img className='border border-3 border-dark rounded boxItem' width='25%' src={Photo1}/>
          <img className='border border-3 border-dark rounded boxItem' width='25%' src={Photo2}/>
          <img className='border border-3 border-dark rounded boxItem' width='25%' src={Photo3}/>

        {/* <div className='col-md-8 col-sm-8'>
          <div align="center" className="embed-responsive embed-responsive-16by9 mx-5" width="85%">
              <video id='myVideo' oncanplay="this.muted=true" muted autoPlay loop className="embed-responsive-item" src={skateclip} width='100%'/>
          </div>

        </div> */}
        </div>

        <div className='row'>
          <div className='col-md-1 col-sm-0'></div>
          <div className='col-md-10 col-sm-12'>
            <p className='text-center m-5 bg-white border border-3 border-dark rounded not-bold2 d-none d-lg-block' >
            Sumowski exists to bring people together through creativity, and give artists (of all kinds) a platform to spread their ideas and creations. We make originally designed and hand crafted multi-media art and clothing. We also support and donate to the homeless population of Denver, and give back to our community in any way possible. 
          </p>  
          <p className='text-center mx-1 my-5  bg-white border border-3 border-dark rounded d-lg-none small-boi2' >
          Sumowski exists to bring people together through creativity, and give artists (of all kinds) a platform to spread their ideas and creations. We make originally designed and hand crafted multi-media art and clothing. We also support and donate to the homeless population of Denver, and give back to our community in any way possible.           </p>  
          </div>
          <div className='col-md-1 col-sm-0'></div>
        </div>


        
        
    </div>
    
 
  )
}