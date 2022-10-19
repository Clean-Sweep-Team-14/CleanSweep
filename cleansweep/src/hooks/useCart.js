import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as apiEndpoints from "../Endpoints";
import { useLocalStorage } from "./useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const scopedCart = {...cart}
  // const formattedChore = {"chore" : chore.pk, "day" : 0}
  // scopedCart[chore.pk] = formattedChore
  const addToCart = (chore, choreDay) => {
    let scopedCart = [...cart];
    console.log(`scopedCart is ${JSON.stringify(scopedCart)}`);
    const formattedChore = {
      chore: chore,
      day: choreDay,
    };
    console.log(`formattedChore is ${JSON.stringify(formattedChore)}`);
    scopedCart = [...scopedCart, formattedChore];
    console.log(`scopedCart is ${JSON.stringify(scopedCart)}`);
    setCart(scopedCart);
  };


  const memoedValue = useMemo(
    () => ({
      cart,
      addToCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={memoedValue}>{children}</CartContext.Provider>
  );
};

export default function useCart() {
  return useContext(CartContext);
}
