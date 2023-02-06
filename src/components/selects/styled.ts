import styled from "styled-components";
import search from "../../assets/svg/search.svg"
import triangle from "../../assets/svg/triangle.svg"

export const InputSearchStyled = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.38);
  padding: 15px 15px 15px 35px;
  border-radius: 8px;
  font-size: 14px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 5px 50%;
  outline-offset: 0;
`;
export const InputSelectStyled = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.38);
  padding: 15px 35px 15px 15px;
  border-radius: 8px;
  font-size: 14px;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: 100% 50%;
`