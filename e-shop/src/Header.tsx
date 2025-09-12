
import React from 'react';
import './Header.css';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

// Create the functional component, typing its props
const Header: React.FC = () => {
  return (
    <div className='header'>
     <div className="header_logo">
      <StorefrontIcon className='header_logo_image' fontSize='large'/>
      <h2 className='header_logoTitle'>eshop</h2>
      </div>
     <div className="header_Search">
      <input placeholder='search' className='header_searchInput' type='text'/>
      <SearchIcon className='header_searchIcon' fontSize='large'/>
     </div>
     <div className="header_nav">
      <div className="nav_item">
        <span className='nav_itemLineOne'>Hello Guest</span>
         <span className='nav_itemLineTwo'>Sign in</span>
      </div>
       <div className="nav_item">
         <span className='nav_itemLineOne'>Your</span>
         <span className='nav_itemLineTwo'>Shop</span>
       </div>
        <div className="nav_item">
          <ShoppingBasketIcon fontSize='large'/>
        
         <span className='nav_itemLineTwo'>0</span>
        </div>
     </div>
    </div>
  );
};

export default Header;