import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavWrap = styled.header`
  box-shadow: -2px 0 8px 2px rgba(0, 0, 0, 0.1);
`
export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  @media (max-width: 768px) {
    display: block;
    padding: 15px 0;
  }
`
export const NavLogo = styled.div`
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`
export const NavLink = styled(Link)`
  font-family: "Karla", "Arial", sans-serif;
`
export const NavButton = styled.button`
  background: transparent;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`
export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  @media (max-width: 768px) {
    display: block;
  }
`
export const NavItem = styled.li`
  padding: 10px 0;
`
export const NavContent = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`