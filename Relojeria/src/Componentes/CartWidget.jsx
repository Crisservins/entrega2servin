import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css'; 

const CartWidget = () => {
  const itemCount = 1; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <div className="cart-notification">
        {itemCount}
      </div>
    </div>
  );
}

export default CartWidget;
