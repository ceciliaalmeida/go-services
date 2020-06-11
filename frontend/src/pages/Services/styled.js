import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1180px;
padding: 0 30px;
margin: 32px auto;
`;

export const Content = styled.div`
width: 100%;
max-width: 1180px;
padding: 0 30px;
margin: 32px auto;
h1{
  margin-bottom: 12px;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 34px;
  list-style: none;
}
ul li {
  background: #FFF;
  padding: 24px;
  border-radius: 8px;
}
ul li strong {
  
  color: #41414d;
}
ul li p {
  color: #737380;
  line-height: 21px;
  font-size: 16px;
}
`;
