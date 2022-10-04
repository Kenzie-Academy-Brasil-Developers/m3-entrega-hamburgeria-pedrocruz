import styled from "styled-components";

const BoxPrice = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: var(--text-size2);
  }
  span {
    color: var(--main-color);
    font-weight: 600;
    font-size: var(--text-size3);
  }
  button {
    width: 100%;
    height: 30px;
    border: solid 1px var(--main-color4);
    border-radius: 8px;
    font-size: var(--text-size3);
  }
`;
export default BoxPrice;
