import styled from "styled-components";

export const CharactersImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CharactersImgCover = styled.img`
  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
  }
`
export const CharactersMain = styled.div`
  display: grid;
  gap: 60px;
  flex-direction: column;
  padding: 20px 0;
`
export const CharactersFiltration = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const CharactersWrap = styled.div`
  display: grid;
  gap: 40px;
`
export const CharactersList = styled.ul`
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
export const CharactersItemFigure = styled.figure`
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 3px 4px rgb(0 0 0 / 12%), 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
`
export const CharactersItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`
export const CharactersItemDescription = styled.figcaption`
  padding: 12px;
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
export const ButtonLoad = styled.button`
  font-size: 14px;
  background: #F2F9FE;
  border-radius: 4px;
  color: #2196F3;
  padding: 10px 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 18px rgba(0, 0, 0, 0.12), 0 6px 10px rgba(0, 0, 0, 0.14);
  font-weight: 500;
`