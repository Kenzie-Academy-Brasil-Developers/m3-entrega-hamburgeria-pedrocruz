import MainError from "./style";
import naoEncontrado from "../../assets/naoEncontrado.png";

const ErroSearch = () => {
  return (
    <MainError>
      <h2>Produto não encontrado :(</h2>
      <p>click na logo para recarregar a pagina!!!</p>
      <img src={naoEncontrado} alt="" />
    </MainError>
  );
};
export default ErroSearch;
