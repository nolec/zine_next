import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
  html{
  scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
  }
  body{
     font-family: GmarketSans ;
    color: #2b2b2b;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6{
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;