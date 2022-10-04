import styled from "styled-components";

const FormInput = styled.form`
  width: 280px;
  height: 40px;
  border: solid 1px var(--main-color6);
  display: flex;
  background-color: var(--main-color3);
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;

  input {
    width: 110px;
    border: solid 0px rgba(0, 0, 0, 0);
    background-color: var(--main-color3);
    border-radius: 8px;
    font-size: 1rem;
  }
`;
export default FormInput;
