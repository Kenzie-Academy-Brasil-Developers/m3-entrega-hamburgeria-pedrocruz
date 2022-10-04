import { useEffect, useState } from "react";
import FormInput from "./style";

const InputSearch = ({ itens, setItens }) => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState([]);

  const searchItem = () => {
    setSearch(
      itens.filter((product) => product.name.toLowerCase().includes(filter))
    );
  };
  useEffect(() => {
    setItens(search);
  }, [search]);
  return (
    <FormInput onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => {
          setFilter(
            event.target.value
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          );
        }}
      />
      <button
        className="btn"
        onClick={() => {
          searchItem();
        }}
      >
        Pesquisar
      </button>
    </FormInput>
  );
};
export default InputSearch;
