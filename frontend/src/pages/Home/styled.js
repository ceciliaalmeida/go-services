import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #142850;
  padding: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);

  .searchBox {
    padding: 20px;

    form {
      flex: 1;
      display: flex;

      input {
        width: 100%;
        height: 58px;
        display: block;
        padding: 16px 24px;
        border-radius: 4px 0 0 4px;
        border: none;
        font-size: 20px;
        outline: none;
        color: #4a4a4a;
      }

      button {
        width: 8%;
        border-radius: 0 4px 4px 0;
        overflow: visible;
        float: right;
        border: none;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: #142850;
          border: 2px solid #fff;
        }
      }
    }
  }
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 25%;
    }
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
`;
