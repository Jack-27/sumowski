import React from 'react';
import examplePic from './pictures/eisloPic.jpg'



export default function Artist() {
    
    return (
        <div classname=''>
            <h1 className="text-center mb-5"> Artists </h1>
            <div className=''>
                <div  className='row my-1 artistBody'>
                    <div className='col-md-3 artistPic'>
                        <img height='60%' className='my-5 mx-1' src={examplePic}/>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        <div className='mx-5 my-5'>
                            <h2 className='text-white'>Eislo</h2>
                            <a href="https://soundcloud.com/eislo" className='art-link-text'>Soundcloud</a>

                        </div>
                    </div>
                </div>
                <div className='row'></div>
            </div>
        </div>
    );
}