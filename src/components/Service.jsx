import React from 'react';
import '../styles/Service.css';
import serviceImage from '../assets/border-side1.png'

function Service() {
  return (
    <div className='serviceDiv' style={{ backgroundImage: `url(${serviceImage})` }}>
      <h1 className='serviceHeading'>We are committed to the highest <br /> standards of quality and service</h1>
      <div className='serviceCardGroup'>
        <div className='serviceCard'>
          <p className='card1Heading'>Make a Reservation</p>
          <p className='card-para'>
            Aenean nec felis dictum, laoreet tellus eget, semper nunc. Vestibulum eget bibendum elit, ac cursus enim. 
            Donec aliquet efficitur lectus non feugiat. 
          </p>
          <p className='reserveMail'>
            reservations@arabicca.com
          </p>
        </div>
        <div className='serviceCard'>
          <p className='card1Heading'>Opening Hours</p>
          <div className='hours'>
            <div>
              <p>Monday 8.00 - 22.00</p>
              <p>Tuesday 8.00 - 22.00</p>
              <p>Wednesday 8.00 - 22.00</p>
            </div>
            <div>
              <p>Thursday 8.00 - 22.00</p>
              <p>Friday 8.00 - 22.00</p>
              <p>Sat/ Sun 8.00 - 22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service