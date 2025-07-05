import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ItemContext } from '../context/ItemContext';
import './Navbar.css'; 

const Navbar = () => {
  const { itemsInCart, totalPrice } = useContext(ItemContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand">EcommerceWebsite</h1>
      </div>

      <div className="navbar-right">
        <span className="price">Total: ${totalPrice}</span>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
          <span className="cart-count">{itemsInCart}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
