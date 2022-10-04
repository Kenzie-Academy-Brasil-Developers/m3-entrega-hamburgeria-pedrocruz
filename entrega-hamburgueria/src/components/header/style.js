import styled from "styled-components";

const HeaderItens = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--main-color4);
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin-bottom: 40px;

  img {
    cursor: pointer;
  }
  /* div */
  div {
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  @media (max-width: 750px) {
    img {
      margin: 0 auto;
    }
    form {
      margin: 0 auto;
    }
  }
`;
export default HeaderItens;
