import styled from "styled-components";

const CartItens = styled.section`
  width: 25%;
  min-width: 300px;
  height: 450px;
  background-color: var(--main-color3);
  border-radius: 8px;
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
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: auto;
  }
  li {
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
  }
  img {
    width: 50px;
    height: 50px;
    background-color: var(--main-color3);
  }
  h4 {
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
  button {
    font-size: 16px;
    border: none;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
`;
export default CartItens;
