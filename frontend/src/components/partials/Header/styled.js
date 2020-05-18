import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 80px;
  box-shadow:0px 0px 3px #f6f6f6;

  .container {
    margin: auto;
    height: 80px;
    padding-left: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1140px;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;
    padding-left: 10px;
    color: #000;
  }

  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        border: 0;
        color: #000;
        font-size: 15px;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        outline: 0;

        &.button {
          background-color: #142850;
          padding: 15px 30px;
          display: flex;
          justify-content: center;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          border-radius: 30px;
        }

        &.button:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
