import CartItens from "./style";
import cartPrice from "../cartPrice";

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  const removeItem = (id) => {
    const remove = cart.filter((Element) => Element.id !== id);
    setCart(remove);
  };
  return (
    <CartItens>
      <section>
        <h2>Carrinho de Compras</h2>
      </section>
      {cart.length === 0 ? (
        <ul>
          <h1>Nenhum item</h1>
        </ul>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <span>R$:{item.price}</span>
              </div>
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <cartPrice cart={cart} />
    </CartItens>
  );
};
export default Cart;
