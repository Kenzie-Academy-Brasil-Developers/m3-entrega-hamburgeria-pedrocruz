import styled from "styled-components";

const ProductsItens = styled.ul`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  li {
    min-width: 300px;
    height: 350px;
    border: solid 1px var(--main-color4);
    border-radius: 8px;
    gap: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  section {
    width: 100%;
    height: 45%;
    background-color: var(--main-color3);
    text-align: center;
    border-radius: 8px 8px 0 0;
  }
  img {
    width: 70%;
    height: 100%;
  }
  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  h2 {
    font-size: var(--font-size3);
  }
  p {
    font-size: 16px;
    font-weight: 100;
  }
  span {
    font-size: var(--font-size5);
    font-weight: 500;
    color: var(--main-color);
  }
  @media (max-width: 750px) {
    overflow-y: auto;
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
`;
export default ProductsItens;
