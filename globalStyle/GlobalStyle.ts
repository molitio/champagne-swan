import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
  }

  *, *::before, *::after {
  box-sizing: inherit;
  }

  body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: "Tenor Sans", sans-serif;
  }

  h1 {
    font-family: "Fahkwang", sans-serif;
  }

  * {
  /*   outline: 1px solid red; */
}
`;

export default GlobalStyle;
