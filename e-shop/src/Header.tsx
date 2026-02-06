
import React from 'react';
import './Header.css';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useCart } from './StateProvider';
// Create the functional component, typing its props
const Header: React.FC = () => {
  const {  cart } = useCart();
   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className='header'>
        <Link to="/">
      <div className="header__logo" style={{textDecoration:"none"}}>
       
        <StorefrontIcon className='header__logoImage' fontSize='large' />
        <h2 className='header__logoTitle'>eshop</h2>
        
      </div>
       </Link>
      <div className="header__search">
        <input placeholder='search' className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon'  />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Sign in</span>
        </div>
        <div className="nav__item">
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>
       <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav__itemBasket">
           
          <ShoppingBasketIcon  />
          <span className='nav__itemLineTwo nav__basketCount'>{totalItems}</span>
         
        </div>
         </Link>
      </div>
    </div>
  );
};

export default Header;