import HeaderItens from "./style";
import logo from "../../assets/logo.svg";

const Header = ({ itens, setItens }) => {
  const searchValue = (value) => {
    const resp = itens.filter((element) => {
      if (element.name.includes(value)) {
        setItens([...itens, element]);
      }
    });
  };
  return (
    <HeaderItens>
      <div>
        <img src={logo} alt="" />
        <form action="">
          <input
            type="text"
            onChange={(event) => setItens(event.target.value)}
            placeholder="Digitar pesquisa"
          />
          <button className="btn">pesquisar</button>
        </form>
      </div>
    </HeaderItens>
  );
};

export default Header;
