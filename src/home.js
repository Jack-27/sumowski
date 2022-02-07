import React from 'react';
import skateclip from './pictures/IMG_0140.mov'



export default function Home() {
  return (
      <div>
        <h1 className='text-center'> MISSION STATEMENT</h1>
        <p className='text-center m-5 font-weight-bold bg-white border border-3 border-dark rounded'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus ex id dolor mattis sagittis. Nunc lobortis euismod tellus sit amet laoreet. Curabitur tempus commodo dolor id consectetur. Aliquam consectetur ornare odio, sed malesuada tellus vestibulum et. Mauris id aliquet libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec congue lectus diam, non facilisis est condimentum eget. Nam interdum sapien sapien, at cursus nibh efficitur ut. Nam vitae orci ornare, porttitor lorem id, accumsan urna. Pellentesque efficitur quam sit amet imperdiet fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus gravida, ipsum et elementum sollicitudin, lorem arcu aliquam nulla, vel rhoncus massa urna mollis risus. Curabitur in iaculis ipsum. Nulla facilisi. Pellentesque efficitur fringilla ligula. Vestibulum finibus justo nunc, ac mollis metus fermentum at.

Donec placerat urna at tincidunt porttitor. Etiam auctor erat orci, vitae egestas ex commodo sed. Ut vel porttitor tellus. Nunc pulvinar, dui nec rutrum aliquam, magna lorem aliquet eros, ut interdum lacus mauris ut ex. Praesent eget risus eros. Mauris vulputate nibh sed aliquam sodales. Ut accumsan placerat tellus quis consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non nibh ex. Ut nec pulvinar elit.

Nulla venenatis, dui ut dictum tempus, ligula mi bibendum velit, et consectetur sapien arcu eget sapien. Aenean tempor fermentum turpis, ut mattis nulla dignissim in. Nam nec massa sed est ornare finibus nec ac nisi. Donec eu mattis magna, sodales posuere arcu. Aliquam urna dui, sagittis at erat eu, fringilla suscipit massa. In non feugiat tortor. Praesent egestas velit mi, sit amet aliquam lorem consectetur non. Praesent felis diam, laoreet sed tristique et, elementum at nibh. Nulla ut suscipit enim. Morbi quis venenatis dui. Curabitur nec arcu aliquam, pulvinar magna eget, lobortis purus. Morbi non mauris vitae lacus commodo commodo. Nullam elementum ex urna, eu interdum lectus fermentum vel. Morbi ut eleifend mauris. Mauris justo eros, luctus sit amet tellus nec, efficitur posuere erat. In consequat feugiat ex et tristique.</p>
        <div align="center" className="embed-responsive embed-responsive-16by9">
            <video id='myVideo' oncanplay="this.muted=true" muted autoPlay loop className="embed-responsive-item" src={skateclip} width = '700px'/>
            
        </div>

        
    </div>
    

  )
}