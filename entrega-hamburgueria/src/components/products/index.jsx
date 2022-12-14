import ProductsItens from "./style";

const Products = ({ itens, addToCart }) => {
  return (
    <ProductsItens>
      {itens.map((item) => (
        <li key={item.id}>
          <section>
            <img src={item.img} alt={item.name} />
          </section>

          <div>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <span>R$:{item.price.toFixed(2)}</span>
            <button className="btn" onClick={() => addToCart(item, item.id)}>
              Adicionar
            </button>
          </div>
        </li>
      ))}
    </ProductsItens>
  );
};
export default Products;

/* category, id, img, name, price */
