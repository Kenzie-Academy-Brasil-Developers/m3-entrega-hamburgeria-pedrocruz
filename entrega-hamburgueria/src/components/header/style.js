import styled from "styled-components";

const HeaderItens = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--main-color4);
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin-bottom: 40px;

  /* div */
  div {
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    overflow-y: auto;
  }

  form {
    width: 280px;
    height: 40px;
    border: solid 1px var(--main-color6);
    display: flex;
    background-color: var(--main-color3);
    border-radius: 8px;
    align-items: center;
    justify-content: space-around;
  }
  input {
    width: 110px;
    border: solid 0px rgba(0, 0, 0, 0);
    background-color: var(--main-color3);
    border-radius: 8px;
    font-size: 1rem;
  }
`;
export default HeaderItens;
