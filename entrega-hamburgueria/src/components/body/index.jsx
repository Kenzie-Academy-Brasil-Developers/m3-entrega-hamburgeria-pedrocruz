import { useState } from "react";
import Cart from "../cart";
import Products from "../products";
import BodyItens from "./style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErroSearch from "../erroSearch";

const Body = ({ itens }) => {
  const [cart, setCart] = useState([]);

  const removeItem = (id, item) => {
    const remove = cart.filter((Element) => Element.id !== id);
    toast.dark(`${item} removido!`);
    setCart(remove);
  };
  const addToCart = (item) => {
    /* itens repetidos nao entram no carrinho */
    if (cart.includes(item)) {
      toast.dark("Item ja foi adicionado antes!");
    } else {
      toast.dark(`${item.name} adicionado!`);
      setCart([...cart, item]);
    }
  };
  return (
    <BodyItens>
      <ToastContainer />
      <div>
        {itens.length === 0 ? (
          <ErroSearch />
        ) : (
          <Products itens={itens} addToCart={addToCart} />
        )}
        <Cart
          cart={cart}
          setCart={setCart}
          removeItem={removeItem}
          ToastContainer={ToastContainer}
        ></Cart>
      </div>
    </BodyItens>
  );
};
export default Body;
