import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Helvetica";
    src: url("../fonts/helvetica_neue_regular.ttf");
  }

  body,
  html {
    font-family: Helvetica;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0px;
    background-color: #EEEEEE;
    overflow-x: hidden;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;
