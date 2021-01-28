import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.title};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Heebo', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    font-family: 'Barlow', sans-serif;
    color: ${props => props.theme.colors.title};
  }

  input {
    border: 1px solid #DCE2E5;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
