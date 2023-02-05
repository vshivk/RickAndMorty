import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  figure {
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  h6 {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    border: none;
    cursor: pointer;
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