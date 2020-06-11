import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1120px;
height: 100vh;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;
  `;

export const Content = styled.div`
width: 100%;
padding: 96px;
background: #f0f0f5;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
border-radius: 8px;

display: flex;
justify-content: space-between;
align-items: center;

section {
  width: 100%;
  max-width: 380px;
}
section img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

form {
  width: 100%;
  max-width: 450px;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
form textarea {
  width: 100%;
  resize: vertical;
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
}

form button {
  width: 100%;
    height: 60px;
    background: var(--primary-color);
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
}

form button:hover {
  filter: brightness(90%);
}

`;