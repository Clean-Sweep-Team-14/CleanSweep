import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as apiEndpoints from "../Endpoints";
import { useLocalStorage } from "./useLocalStorage";

const CartContext = createContext();

export default function useCart() {
  return useContext(CartContext);
}
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const scopedCart = {...cart}
  // const formattedChore = {"chore" : chore.pk, "day" : 0}
  // scopedCart[chore.pk] = formattedChore
  const addToCart = (chore, due_date) => {
    let scopedCart = [...cart];
    console.log(`scopedCart is ${JSON.stringify(scopedCart)}`);
    const formattedChore = {
      chore: chore,
      due_date: choreDay,
    };
    console.log(`formattedChore is ${JSON.stringify(formattedChore)}`);
    scopedCart = [...scopedCart, formattedChore];
    console.log(`scopedCart is ${JSON.stringify(scopedCart)}`);
    setCart(scopedCart);
  };


  const memoedValue = useMemo(
    () => ({cart, addToCart
    }),
  );

  return (
    <CartContext.Provider value={memoedValue}>{children}</CartContext.Provider>
  );
};