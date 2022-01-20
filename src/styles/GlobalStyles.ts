import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    box-sizing: border-box;
  }
  
  body {
    background-color: ${props => props.theme.colors.white};
  }
  
  button {
    border: 0;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.opaqueWhite};
  }
`;
