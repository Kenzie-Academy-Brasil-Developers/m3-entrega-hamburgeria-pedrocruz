import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --main-color:#27AE60;
        --main-color2:#93D7AF;
        --main-color3:#F5F5F5;
        --main-color4:#E0E0E0;
        --main-color5:#EB5757;
        --main-color6:#828282;

        --text-size:26px;
        --main-wiigth:bold;
        
        --text-size2:22px;
       

        --text-size3:18px;
        

        --text-size4:14px;
        

        --text-size5:16px;
        --main-wiigth2:regular;
    }
    *{
        list-style: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }
    body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight:var(--main-wiigth);
  }
  button {
    cursor: pointer;
  }
  .btn {
    width: 90px;
    font-size: 0.8rem;
    border-radius: 8px;
    border: none;
    background-color: var(--main-color);
    color: var(--main-color3);
    height: 30px;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--main-color);
    margin: 1rem;
    border-radius: 1.6rem;
  }
 
  ::-webkit-scrollbar-thumb {
    background: var(--main-color5);
    border-radius: 1.6rem;
  }
 
  ::-webkit-scrollbar-thumb:hover {
    background: var(--main-color5);
  }
`;
