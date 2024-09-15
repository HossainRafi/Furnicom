import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // array to hold cart items

  const addToCart = (product) => {
    // check if the product is already in the cart
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        icon: "error",
        title: "Already exists in the cart",
        showConfirmButton: false,
        timer: 1500,
      });
      
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const cartCount = cartItems.length; // count of unique products in the cart

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
