import styled from "styled-components";

import background from '../../assets/online_groceries.svg';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat 700px ;
  background-size: 580px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  main {
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main h1 {
    font-size: 54px;
    color: var(--title-color);
  }

  main p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  main a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;
  }

  main a span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  main a span svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  main a strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  main a:hover {
    filter: brightness(90%);
  }
`;
