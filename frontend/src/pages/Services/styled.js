import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
padding: 28px 30px;

display: flex;
flex-direction: row;
align-items: flex-start;
`;

export const ContentLeft = styled.div`
width: 250px;
background: #FFF;
box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
border-radius: 8px;
padding: 20px 20px;
margin: 20px;
strong {
  font-size: 18px;
  text-align: center;
  display: block;
  margin-bottom: 20px;
}

select {
  width:100%;
  height:40px;
  border:2px solid #152850;
  border-radius:5px;
  outline:0;
  font-size:15px;
  padding:10px;
  text-align: center;
}
`;

export const ContentRight = styled.div`
flex: 1;

h1 {
  margin-bottom: 12px;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
}
ul li {
  background: #FFF;
  padding: 24px;
  border-radius: 8px;
  position: relative;

}
ul li strong {
  display: block;
  color: #41414d;
}
ul li p + strong {
  margin-top: 32px;
}
ul li p {
  color: #737380;
  line-height: 21px;
  font-size: 16px;
}
ul li button {
  position: absolute;
  right: 10px;
  top: 24px;
  border: 0;
  background: transparent;
}
ul li button:hover {
  opacity: 0.8;
}
`;
