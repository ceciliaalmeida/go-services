import styled from "styled-components";

export const PageArea = styled.div`

form {
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 300;

    .area {
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;
        background-color: #FFF;
        border-radius: 3px;

        .area--title {
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }
        .area--input {
            flex:1;

            input {
                width:100%;
                font-size:14px;
                padding:5px;
                border:1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition:all ease .4s;

                &:focus {
                    border:1px solid #333;
                    color:#333;
                }
            }

            button {
                background-color:#142850;
                border:0;
                outline:0;
                padding:5px 10px;
                border-radius:4px;
                color:#FFF;
                font-size:15px;
                cursor:pointer;
                line-height: 24px;
    font-size: 16px;
    height: 48px;
    min-width: 120px;
    background-color: rgb(247, 131, 35);
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    width: 100%;
    border-width: 0px;
    border-radius: 32px;
    flex: 1 1 0%;
    padding: 0px 8px;
}

                &:hover {
                    background-color:#0c7b93;
                }
            }
        }
    }
}

`;
