import styled from "styled-components";

const BodyItens = styled.section`
  width: 100%;
  height: 90vh;

  div {
    width: 80%;
    margin: 0 auto;
    gap: 5%;
    display: flex;
  }
  @media (max-width: 750px) {
    div {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export default BodyItens;
