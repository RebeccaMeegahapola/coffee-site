import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import BannerImage from '../assets/bg1.jpg';
import '../styles/Home.css'
import ServicesCards from '../components/ServicesCards';
import CoffeeMenu from '../components/CoffeeMenu';
import Service from '../components/Service';
import Footer from '../components/Footer';

function Home() {

  const reviewCards = [
    {
      count: "1K+",
      reviewDescription: "Reviews"
    },
    {
      count: "3K+",
      reviewDescription: "Best sell"
    },
    {
      count: "150K+",
      reviewDescription: "Menu"
    }
  ]

  const [cartItems, setCartItems] = useState(0);

  const handleCart = () => {
      setCartItems(prevCount => prevCount + 1);

      console.log(cartItems)
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${BannerImage})` }} className='home-image'>
        <Navbar items={cartItems}/>
        <div className='home-div'>
          <h1 className='home-heading'>Discover The Art <br/> Of Perfect Coffee</h1>
          <p className='home-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget libero mauris. Ut vestibulum mi lectus, 4
            et faucibus quam facilisis sit amet. Sed id molestie arcu, et eleifend enim. 
          </p>
          <button className='home-btn'>Order Now</button>
          <div className='home-card-group'>
            {reviewCards.map((review) => (
                <div className='home-card'>
                  <h2 className='reviewCount'>{review.count}</h2>
                  <p className='review'>{review.reviewDescription}</p>
                </div> 
            ))}
            
          </div>
        </div>       
      </div>
      <ServicesCards />
      <CoffeeMenu addCart={handleCart}/>
      <Service />
      <Footer />
    </>
  )
}

export default Home