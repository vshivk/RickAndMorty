import styled from "styled-components";
import {Link} from "react-router-dom";

export const CharacterDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 80px;
  gap: 40px;
  @media (max-width: 768px){
  grid-template-columns: 1fr;
  gap: 50px;
    padding: 15px;
}
`;
export const CharacterDescriptionList = styled.ul`
    padding-top: 35px;
    @media (max-width: 768px){
  padding-top: 15px;
}
`;
export const CharacterDescriptionItem = styled.li`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 15px 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CharacterDescriptionItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
export const CharacterImg = styled.img`
  object-fit: cover;
  border: 5px solid #F2F2F7;
  border-radius: 100%;
  @media (max-width: 768px){
    width: 250px;
    height: 250px;
  }
`;
export const ItemLinkInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LinkBackWrap = styled.div`
padding-top: 15px;
`;
export const CharacterImgWrap = styled.div`
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;