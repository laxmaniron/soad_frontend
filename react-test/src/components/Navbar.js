import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render(){

    return (

      <header className="header">
          <img src={require("./img/logo.png")} alt="smw logo" className="logo" />
          <nav className="category_nav">
            <ul>
            <Link className="link" to="/">
              <li>Men</li>
            </Link>
            <Link className="link" to="/">
              <li>Women</li>
            </Link>
            <Link className="link" to="/">
              <li>Kids</li>
            </Link>
            </ul>
          </nav>
          <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search " />
            <button className="search__button">
            <img className="user-nav__icon_1" alt="search" src={require("./img/SVG/search.svg")} />
            </button>
          </form>
          <nav className="user-nav">
            {/*icon boxxes*/}
            <Link to="/WishList">
            <div className="user-nav__icon-box">
            <img className="user-nav__icon" alt="wishlist" src={require("./img/SVG/heart.svg")} />

              <span className="user-nav__notification">7</span>
            </div>
            </Link>
            {/*icon box-2*/}
            <Link to="/Cart">
            <div className="user-nav__icon-box">
          <img className="user-nav__icon" alt="cart" src={require("./img/SVG/cart.svg")} />
              <span className="user-nav__notification">13</span>
            </div>
            </Link>
            {/*last element of header*/}
            <Link className="link" to="/Profile">
            <div className="user-nav__user">
              <img src={require("./img/user.jpg")} alt="profile" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Jonas</span>
            </div>
            </Link>
          </nav>
        </header>
    
    );
  }
}

export default Navbar;
