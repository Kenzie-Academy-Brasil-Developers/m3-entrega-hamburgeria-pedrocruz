import { useEffect, useState } from "react";
import Global from "./styles/global.js";
import Header from "./components/header";
import Body from "./components/body/index.jsx";
import Api from "./services/Api.js";

function App() {
  const [login, setLogin] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    Api.then((resp) => setItens(resp.data)).catch((error) =>
      console.log(error)
    );
  }, []);

  return (
    <div>
      <Global />
      <Header itens={itens} setItens={setItens} />
      <Body itens={itens} />
    </div>
  );
}

export default App;
