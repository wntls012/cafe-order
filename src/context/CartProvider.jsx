import { useEffect, useState } from "react";
import { CartContext } from "./CartContext.js";

// 장바구니를 기억하고, 감싼 컴포넌트(children) 모두에 나눠 줍니다 — DAY 35까지 App이 하던 일
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = cart.length > 0 ? `(${cart.length}) 오즈 카페` : "오즈 카페";
  }, [cart.length]);

  function addToCart(menu) {
    setCart([...cart, menu]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
