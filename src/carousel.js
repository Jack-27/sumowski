import React from 'react';


export default function Slide(
    {
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6
    }
) {
  return (
    
    <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div> */}
        <div className="carousel-inner" >
            {pic1 ? 
                <div className="carousel-item active">
                <img src={pic1} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            {pic2 ? 
                <div className="carousel-item">
                <img src={pic2} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            {pic3 ? 
                <div className="carousel-item">
                <img src={pic3} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            {pic4 ? 
                <div className="carousel-item">
                <img src={pic4} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            {pic5 ? 
                <div className="carousel-item">
                <img src={pic5} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            {pic6 ? 
                <div className="carousel-item">
                <img src={pic6} className="d-block w-100 border border-5 border-dark rounded bg-light" alt="..."/>
                </div>
            : null}
            
            
            
            
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
</div>


  );
}