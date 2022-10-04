import Box from "./style";

const CartBox = ({ cart, removeItem }) => {
  return (
    <>
      {cart.map((item) => (
        <Box key={item.id}>
          <div>
            <img src={item.img} alt="" />
          </div>
          <main>
            <h4>{item.name}</h4>
            <span>R$:{item.price.toFixed(2)}</span>
          </main>
          <button onClick={() => removeItem(item.id, item.name)}>
            Remover
          </button>
        </Box>
      ))}
    </>
  );
};

export default CartBox;
