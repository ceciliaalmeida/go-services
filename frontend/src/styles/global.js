import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --primary-color: #152850;
  --title-color: #152850;
  --text-color: #6c6c80;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
  -webkit-font-smoothing: antialiased;
  color: var(--text-color);
}
  body, input, button {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--title-color);
  font-family: Ubuntu;
}
a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;
