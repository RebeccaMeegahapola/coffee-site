import React from 'react';
import '../styles/ServicesCards.css';
import ServicesImage from '../assets/serviceBg.png';
import img1 from '../assets/coffee.png';
import img2 from '../assets/coffee-beans.png';
import img3 from '../assets/coffee-cup.png';

function ServicesCards() {

  const cardSection = [
    {
      img: img1,
      desc: "Coffee Types",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia arcu ut sem",
      link: "Learn More"
    },
    {
      img: img2,
      desc: "Different Beans",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia arcu ut sem",
      link: "Learn More"
    },
    {
      img: img3,
      desc: "Cold Coffee",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia arcu ut sem",
      link: "Learn More"
    }
  ]

  return (
    <div className='servicesCards' style={{ backgroundImage: `url(${ServicesImage})` }}>
        <h1 className='cardHeading'>Our Delicious Services</h1>
        <p className='cardPara'>
          Vestibulum nulla velit, consequat ut consectetur eu, mattis ac lectus. Cras consectetur molestie ipsum, lacinia ultricies dui 
          tincidunt a. Vivamus egestas ornare iaculis. 
        </p>
        <div className='cardSection'>
        {cardSection.map((card) => (
          <div className='cardOne'>
            <img src={card.img} className='cardImage'/>
            <h3 className='cardDesc'>{card.desc}</h3>
            <p className='cardpara'>{card.para}</p>
            <a href='' className='cardLink'>{card.link}</a>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ServicesCards