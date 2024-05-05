import React from 'react';
import CartImage from '../assets/cartImage2.jpg';
import Navbar from '../components/Navbar';
import '../styles/Cart.css';

function Cart({cart}) {
  return (
    <div>
        <div style={{ backgroundImage: `url(${CartImage})` }} className='cart-image'>
            <Navbar />
            <h1 className='cart-heading'>Shopping Cart</h1>
        </div>
        <div>
            <table className='cartTable'>
                <thead>
                    <tr>
                        <th>Cart Items</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
            </table>
        </div>
        <ul>
        {cart.map((fItems) => (
          <li key={fItems.id}>
            <img src={fItems.img} className='f-Image'/>
            <h3>{fItems.name}</h3>
            <p className='fItem'>{fItems.item}</p>
            <p className='fDesc'>{fItems.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart