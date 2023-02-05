import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;
  }
`;
export const Container = styled.div`
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`
export const Section = styled.div`
  padding-top: 20px;
`