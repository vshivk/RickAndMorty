import styled from "styled-components";
import {ICoverImgProps} from "./cover-img";

export const CoverImgStyled = styled.img<ICoverImgProps>`
  @media (max-width: 768px) {
    width: ${props => props.widthImg};
    height: ${props => props.heightImg};
  }
`