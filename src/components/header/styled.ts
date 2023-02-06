import styled from "styled-components";
import {Link} from "react-router-dom";
import {INavProps} from "./nav";

export const NavWrapStyled = styled.header`
  box-shadow: -2px 0 8px 2px rgba(0, 0, 0, 0.1);
`
export const NavInnerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  @media (max-width: 768px) {
    display: block;
    padding: 15px 0;
  }
`
export const NavLogoStyled = styled.div`
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`
export const NavLinkStyled = styled(Link)`
  font-family: "Karla", "Arial", sans-serif;
  font-weight: 700;
`
export const NavButtonStyled = styled.button`
  background: transparent;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`
export const NavListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  @media (max-width: 768px) {
    display: block;
  }
`
export const NavItemStyled = styled.li`
  padding: 10px 0;
`
export const NavContentStyled = styled.nav<INavProps>`
  @media (max-width: 768px) {
    display: ${props => props.display};
  }
`