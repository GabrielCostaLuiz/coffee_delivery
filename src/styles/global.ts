import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%; /* 1rem = 10px */
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  h1{
    color: ${(props) => props.theme['base-title']};
  }

  h2,h3{
    color: ${(props) => props.theme['base-subtitle']};
  }
`
