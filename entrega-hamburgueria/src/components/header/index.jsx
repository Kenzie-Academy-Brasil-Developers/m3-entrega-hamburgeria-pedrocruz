import HeaderItens from "./style";
import logo from "../../assets/logo.svg";
import InputSearch from "../inputSearch";
import { useEffect, useState } from "react";
import Api from "../../services/Api";

const Header = ({ itens, setItens }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.then((resp) => setData(resp.data)).catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <HeaderItens>
      <div>
        <img src={logo} onClick={() => setItens(data)} alt="" />
        <InputSearch itens={itens} setItens={setItens} />
      </div>
    </HeaderItens>
  );
};

export default Header;
