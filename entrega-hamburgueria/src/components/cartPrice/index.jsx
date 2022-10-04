import BoxPrice from "./style";
const CartPrice = ({ cart, setCart }) => {
  console.log(cart);
  const price = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <BoxPrice>
      <h3>Total:</h3>
      <span> R${price.toFixed(2)}</span>
      <button onClick={() => setCart([])}>Remover Tudo</button>
    </BoxPrice>
  );
};
export default CartPrice;
