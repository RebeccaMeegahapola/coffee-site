import React, { useState } from 'react';
import '../styles/CoffeeMenu.css';
import image1 from '../assets/cappacino.jpg';
import image2 from '../assets/latte.jpg';
import image3 from '../assets/macchiato.jpg';
import image4 from '../assets/americano.jpg';
import image5 from '../assets/expresso.jpg';
import image6 from '../assets/hazelnut.jpg';
import borderImage from '../assets/border1.jpg';

function CoffeeMenu({addCart}) {

    const coffeeMenu = [
        {
            image: image1,
            coffee: "Cappuccino",
            price: "$20",
            button: "Buy Now"
        },
        {
            image: image2,
            coffee: "Chai Latte",
            price: "$23",
            button: "Buy Now"
        },
        {
            image: image3,
            coffee: "Macchiato",
            price: "$24",
            button: "Buy Now"
        },
        {
            image: image4,
            coffee: "Americano",
            price: "$21",
            button: "Buy Now"
        },
        {
            image: image5,
            coffee: "Expresso",
            price: "$22",
            button: "Buy Now"
        },
        {
            image: image6,
            coffee: "matcha Latte",
            price: "$27",
            button: "Buy Now"
        }
    ]

  return (
    <div className='menuMainDiv'>
        <div className='menuDiv'>
            <h1 className='menuHeading'>ENJOY A NEW BLEND OF COFFEE STYLE</h1>
            <p className='menuPara'>
            Vestibulum nulla velit, consequat ut consectetur eu, mattis ac lectus. Cras consectetur molestie ipsum, lacinia ultricies dui 
            tincidunt a. Vivamus egestas ornare iaculis. 
            </p>
        </div>
        <div className='menuCards'>
            {coffeeMenu.map((menu) => (
                <div className='menuCard'>
                    <img src={menu.image} className='menuImage'/>
                    <div className='menuDesc'>
                        <p className='coffeeName'>{menu.coffee}</p>
                        <p className='coffeePrice'>{menu.price}</p>
                    </div>
                    <div className='coffeebtnDiv'>
                        <button className='coffeeBtn' onClick={addCart}>{menu.button}</button>
                    </div>
                </div>                          
            ))}
        </div>
    </div>
  )
}

export default CoffeeMenu