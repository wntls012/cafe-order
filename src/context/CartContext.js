import { createContext } from "react";

// 장바구니(cart)와 바꾸는 함수 — CartProvider 아래 어디서든 useContext(CartContext)로 꺼내 씁니다
// 기본값은 위에 제공자가 없을 때만 쓰입니다
export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
