import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      body {
        margin: 0;
        padding: 0;
        font-family: "Tenor Sans", sans-serif;
      }
      h1 {
        font-family: "Fahkwang", sans-serif;
      }
      * {
        box-sizing: border-box;
  /*   outline: 1px solid red; */
}
`;

export default GlobalStyle;
