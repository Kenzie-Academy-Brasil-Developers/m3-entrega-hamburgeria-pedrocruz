import Empty from "./style";
import cart from "../../assets/cart.png";
const EmptyCart = () => {
  return (
    <Empty>
      <h3>Carinho Vazio</h3>
      <img src={cart} alt="" />
    </Empty>
  );
};
export default EmptyCart;
