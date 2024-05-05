import { useState } from 'react';
import '../styles/Navbar.css';
import { MenuItems } from './MenuItems';
import Logo from '../assets/logo3.png';
import { Link } from 'react-router-dom';

function Navbar({items}) {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
      <nav className='NavbarItems'>
        <Link to='/'>
          <img src={Logo} alt='' className='navbar-logo'/>
        </Link>

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
            <li className='cartNum'>{items}</li>
        </ul>
      </nav>
    
  )
}

export default Navbar