import React, {useState} from 'react';
import '../styles/Menu.css';
import MenuImage from '../assets/menuBg.jpg';
import Navbar from '../components/Navbar';
import mocha from '../assets/mocha.jpg';
import roseLatte from '../assets/roseLatte.jpg';
import coffee from '../assets/coffee.jpg';
import hotbox from '../assets/hotbox.jpg';
import espresso from '../assets/espresso.jpg';
import americano from '../assets/americano1.jpg';
import original from '../assets/original.jpg';
import nitro from '../assets/nitro.jpg';
import stubby from '../assets/stubby.jpg';
import cans from '../assets/cans.jpg';
import OATLY from '../assets/OATLY.jpg';
import cold from '../assets/cold.jpg';
import Footer from '../components/Footer';

function Menu({addToCart}) {

    const featuredItems = [
        {
            item: 'Spicy Strawberry Mocha',
            description: 'Indulge in the decadence of chocolate, fruit and spice with this unique treat featuring our house',
            image: mocha,
            id: 1
        },
        {
            item: 'Rose Gold Honey Latte',
            description: 'We are summoning Spring with this seasonal beverage featuring rose water and honey with Hair',
            image: roseLatte,
            id: 2
        }
    ]

    const coffeeDrinks = [
        {
            item: 'Spicy Strawberry Mocha',
            description: 'Indulge in the decadence of chocolate, fruit and spice with this unique treat featuring our house',
            image: mocha
        },
        {
            item: 'Rose Gold Honey Latte',
            description: 'We are summoning Spring with this seasonal beverage featuring rose water and honey with Hair',
            image: roseLatte
        },
        {
            item: 'Hot Box',
            description: '96oz of hot, batch-brewed coffee; rotates daily. Comes with cups, lids, and condiments of your',
            image: hotbox
        },
        {
            item: 'Coffee',
            description: 'A hot cup of batch-brewed coffee; rotates daily',
            image: coffee
        },
        {
            item: 'Espresso',
            description: 'A double shot of Hair Bender',
            image: espresso
        },
        {
            item: 'Americano',
            description: 'A double shot of Hair Bender espresso and water; served hot or iced',
            image: americano
        }
    ]

    const coldBrew = [
        {
            item: 'Draft Original Cold Brew',
            description: 'Our favorite easy-drinking coffee blend, cold brewed for your pleasure',
            image: original
        },
        {
            item: 'Draft Nitro Cold Brew',
            description: 'Our famous Cold Brew, infused with nitrogen for a cascading, creamy cup. Served without ice',
            image: nitro
        },
        {
            item: 'Cold Brew Stubby',
            description: '',
            image: stubby
        },
        {
            item: 'Cold Brew Cans',
            description: 'Cold Brew -- in cans! Choose from Nitro Cold Brew (11oz) and Nitro Hair Bender Cold Brew (11oz)',
            image: cans
        },
        {
            item: 'OATLY Cartons',
            description: "Our delicious Cold Brew with Oatly's delicious oatmilk",
            image: OATLY
        },
        {
            item: 'Cold Brew Concentrate',
            description: 'Stock your fridge with this 25.4oz bottle of Cold Brew Concentrate; dilute with cold water 1:1 to',
            image: cold
        }
    ]

    const [sectionVisible, setSectionVisible] = useState(false);

    const loadMore = () => {
        setSectionVisible(!sectionVisible); 
    };

  return (
    <div>
        <div style={{ backgroundImage: `url(${MenuImage})` }} className='menu-image'>
            <Navbar />
            <h1 className='menu-heading'>Coffee Menu</h1>
        </div>
        <div>
            <ul className='coffeeList'>
                <li><i class="fa fa-search"></i></li>
                <li><a href='#fItems'>Featured Items</a></li>
                <li><a href='#coffeeDrinks'>Coffee Drinks</a></li>
                <li><a href='#coldBrew'>Cold Brew</a></li>
                <li><a href=''>Tea and Other Beverages</a></li>
                <li><a href=''>Whole Bean Coffee</a></li>
            </ul>
        </div>
        <div className='featured-items' id='fItems'>
            <p className='f-Items'>Featured Items</p>
            <div className='f-cardSet'>
            {featuredItems.map((fItems) => (
                <div className='featuredCard' key={fItems.id}>
                    <div className='f-Card'>
                        <div>
                            <p className='fItem'>{fItems.item}</p>
                            <p className='fDesc'>{fItems.description}</p>
                        </div>
                        <div>
                            <img src={fItems.image} className='f-Image'/>
                        </div>
                    </div>
                    <button className='coffeeBtn' onClick={addToCart}>Buy Now</button>
                </div>
            ))}
            </div>
        </div>
        <div className='featured-items' id='coffeeDrinks'>
            <p className='f-Items'>Coffee Drinks</p>
            <div className='f-cardSet'>
            {coffeeDrinks.map((dItems) => (
                <div className='featuredCard'>
                    <div className='f-Card'>
                        <div>
                            <p className='fItem'>{dItems.item}</p>
                            <p className='fDesc'>{dItems.description}</p>
                        </div>
                        <div>
                            <img src={dItems.image} className='f-Image'/>
                        </div>
                    </div>
                    <button className='coffeeBtn'>Buy Now</button>
                </div>
            ))}
            </div>
        </div>
        <div id='coldBrew' className={sectionVisible ? 'show' : 'hide'}>
            <p className='f-Items'>Cold Brew</p>
            <div className='f-cardSet'>
            {coldBrew.map((cItems) => (
                <div className='featuredCard'>
                    <div className='f-Card'>
                        <div>
                            <p className='fItem'>{cItems.item}</p>
                            <p className='fDesc'>{cItems.description}</p>
                        </div>
                        <div>
                            <img src={cItems.image} className='f-Image'/>
                        </div>
                    </div>
                    <button className='coffeeBtn'>Buy Now</button>
                </div>
            ))}
            </div>
        </div>
        <div className='load-btn'>
            <button className='loadBtn' onClick={loadMore}>{sectionVisible ? 'Hide Section' : 'Load More'}</button>
        </div>
        <Footer />
    </div>
  )
}

export default Menu