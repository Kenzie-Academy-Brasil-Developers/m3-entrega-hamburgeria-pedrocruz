/* https://hamburgueria-kenzie-json-serve.herokuapp.com/products */

import axios from "axios";

const Api = axios({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 5000,
});
export default Api;
