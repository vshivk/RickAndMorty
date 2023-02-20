import styled from "styled-components";
import {Link} from "react-router-dom";

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
  height: 100%;
  display: grid;
  flex-direction: column;
  overflow: hidden;
`
export const SectionContentStyled = styled.div`
  display: grid;
  gap: 60px;
  flex-direction: column;
  padding: 20px 0;
`
export const TextColorGray = styled.p`
  color: #8E8E93;
`;
export const LinkBackStyled = styled(Link)`
  font-size: 18px;
  font-weight: 700;
`;