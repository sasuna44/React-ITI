import React from 'react';
import '../css/header.css'; 

export default function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row flex-column justify-content-center">
          <div className="header__container d-flex flex-column justify-content-center" >
            <div className="header__contianer__content mx-5">
            <h1 className='fw-bold '>
                BUY MORE, SAVE MORE
            </h1>
            <button className="btn text-uppercase bg-light fw-bold my-3 fs-4">
              Shop Now 
            </button>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}
