import { useState } from "react";
import Cart from "../cart";
import Products from "../products";
import BodyItens from "./style";

const Body = ({ itens }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <BodyItens>
      <div>
        <Products itens={itens} addToCart={addToCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </BodyItens>
  );
};
export default Body;
