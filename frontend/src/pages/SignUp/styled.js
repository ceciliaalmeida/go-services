import styled from "styled-components";

export const PageArea = styled.div`
  form {
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    padding: 50px;
    box-shadow: rgba(153, 153, 153, 0.2) 0px 2px 4px 0px;
    

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 50%;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 16px;
      }
      .area--input {
        flex: 1;

        input {
          width: 100%;
          height: 48px;
          padding-top: 11px;
          padding-bottom: 12px;
          padding-left: 16px;
          color: rgb(74, 74, 74);
          font-size: 16px;
          box-sizing: border-box;
          border-style: solid;
          border-color: rgb(210, 210, 210);
          border-width: 1px;
          border-radius: 4px;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        button {
          background-color: #142850;
          padding: 15px 30px;
          display: flex;
          justify-content: center;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          border-radius: 30px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
