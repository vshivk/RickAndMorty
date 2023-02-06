import styled, {createGlobalStyle} from "styled-components";
import {ICoverImgProps} from "./pages/characters/cover-img";

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

  input::placeholder {
    font-size: 14px;
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
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardsWrapStyled = styled.div`
  display: grid;
  gap: 40px;
`
export const CardsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const CardsItemStyled = styled.div`
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 3px 4px rgb(0 0 0 / 12%), 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
`
export const CoverImgStyled = styled.img<ICoverImgProps>`
  @media (max-width: 768px) {
    width: ${props=>props.width};
    height: ${props=>props.height};
  }
`