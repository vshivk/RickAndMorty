import styled from "styled-components";

export const CharactersMainStyled = styled.div`
  display: grid;
  gap: 60px;
  flex-direction: column;
  padding: 20px 0;
`
export const CharactersFiltrationStyled = styled.div`
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
export const CharactersItemImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
`
export const CharactersItemDescriptionStyled = styled.div`
  padding: 12px;
`
