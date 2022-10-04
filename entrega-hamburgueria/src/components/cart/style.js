import styled from "styled-components";

const CartItens = styled.section`
  width: 25%;
  min-width: 300px;
  height: 450px;
  background-color: var(--main-color3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  /* div */
  section {
    width: 100%;
    height: 20%;
    padding-left: 20px;
    border-radius: 8px 8px 0 0;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: var(--font-size4);
    color: white;
  }
  ul {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    border-bottom: solid 2px var(--main-color4);
  }

  @media (max-width: 750px) {
    width: 80%;
  }
`;
export default CartItens;
