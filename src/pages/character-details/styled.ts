import styled from "styled-components";
import {Link} from "react-router-dom";

export const CharacterDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 80px;
  gap: 20px
`;
export const CharacterDescriptionList = styled.ul`
    padding-top: 35px
`;
export const CharacterDescriptionItem = styled.li`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 10px 16px;
  display: flex;
  flex-direction: column
`;
export const CharacterDescriptionItemLink = styled(Link)`
  display: flex;
  flex-direction: column
`
export const CharacterDescriptionItemName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const CharacterDescriptionItemDate = styled.span`
  letter-spacing: 1.5px;
`;
export const CharacterInner = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
`;
export const CharacterImg = styled.img`
  object-fit: cover;
  border: 5px solid #F2F2F7;
  border-radius: 100%;
`;
