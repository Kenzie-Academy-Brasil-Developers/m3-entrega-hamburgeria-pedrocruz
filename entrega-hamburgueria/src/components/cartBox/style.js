import styled from "styled-components";

const Box = styled.li`
  width: 95%;
  height: 80px;
  margin: 2px auto;
  gap: 20px;
  border: 1px solid var(--main-color4);
  border-radius: 8px;
  display: flex;
  align-items: center;

  div {
    max-width: 70px;
    height: 60px;
    background-color: var(--main-color4);
    border-radius: 8px;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  main {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  h4 {
    font-size: var(--text-size4);
  }
  span {
    font-size: var(--text-size4);
    font-weight: 700;
    color: var(--main-color);
  }
  button {
    width: 70px;
    font-size: var(--text-size4);
    margin: 0 10px;
    border: none;
    background-color: var(--main-color3);
  }
`;
export default Box;
