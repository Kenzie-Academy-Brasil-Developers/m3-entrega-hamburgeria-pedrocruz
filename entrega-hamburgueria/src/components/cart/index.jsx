import CartItens from "./style";
import EmptyCart from "../emptyCart";
import CartBox from "../cartBox";
import CartPrice from "../cartPrice";

const Cart = ({ cart, setCart, removeItem }) => {
  return (
    <CartItens>
      <section>
        <h2>Carrinho de Compras</h2>
      </section>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul>
            <CartBox cart={cart} removeItem={removeItem} />
          </ul>
          <CartPrice cart={cart} setCart={setCart} />
        </>
      )}
    </CartItens>
  );
};
export default Cart;
