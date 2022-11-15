import { Search } from "@material-ui/icons";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import React from "react";
import './styles/Header.css'

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search  className="header__searchIcon"/>
        {/* Logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Oders</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="Header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount" >0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
