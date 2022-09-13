import React from "react";
import Artist from "./artist";

export default function Contact(){
    return (
        <div className="">
            <div className="row">
                <div className="col-md-1"></div>
                <div className=" col-md-4">
                    <div className="my-5">
                        <div className="border border-3 border-dark rounded bg-white p-1 pt-2 text-center" width='250px'> 
                            <h6 className='montserratBold' >For Questions Or General Purposes Use:</h6>
                            <p className='montserratReg'>inquiries@sumowski.art</p>
                        </div>
                    </div>
                    <div className="my-5">

                            <div className="border border-3 border-dark rounded bg-white p-1 pt-2 text-center">
                                <h6 className='montserratBold'>For Complaints or Help Use:</h6>
                                <p className='montserratReg'>complaints@sumowski.art</p>
                            </div>     
                    </div>
                    <div className="my-5">

                            <div className="border border-3 border-dark rounded bg-white p-1 pt-2 text-center">
                                <h6 className='montserratBold'>Send us art or skate clips:</h6>
                                <p className='montserratReg'>art@sumowksi.art</p>
                            </div>
                    </div>
                    
                </div>    
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <Artist/>
                </div>
                    <div className="col-md-1"></div>
                </div>  
        </div>
    );
}