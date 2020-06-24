import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1120px;
height: 100vh;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;
img {
width: 40%;
}
`;

export const Content = styled.div`
  margin: 40px;
  width: 100%;
  max-width: 450px;
  background: #FFF;
  border-radius: 4px;
  padding: 30px;
  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-top: 8px;
  }

  .back-link {
    margin-top: 40px;
  }
`;