import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // array to hold cart items

  const addToCart = (product) => {
    // check if the product is already in the cart
    if (cartItems.some((item) => item.id === product.id)) {
      alert(`already in cart `);
      
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      alert("product added successfully");
    }
  };

  const cartCount = cartItems.length; // count of unique products in the cart

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
