import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;515;600;700&display=swap');

  * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
  }

  *:focus {
   outline: 0;
  }

  html, body, #root {
   height: 100%;
  }

  body {
    background: #44475a;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: 'Fira Code', monospace, sans-serif;
    width: 90%;
    margin: 0 auto;
  }

  a {
   text-decoration: none;
   cursor: pointer;
  }

  ul {
   list-style: none;
  }

  button {
   cursor: pointer;
  }
`;
export default GlobalStyles;
