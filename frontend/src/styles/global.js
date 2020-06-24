import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

:root {
  --primary-color: #152850;
  --title-color: #152850;
  --text-color: #6c6c80;
}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoohing: antialiased;
    color: var(--text-color);
}
 input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

h1 {
  color: var(--title-color);
  font-family: Ubuntu;
}
a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  .button {
    width: 100%;
    height: 60px;
    background: #152850;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }

  .back-link {
    display: flex;
    align-items: center;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
}

.back-link svg {
    margin-right: 8px;
}

.back-link:hover {
    opacity: 0.8;
}
`;
