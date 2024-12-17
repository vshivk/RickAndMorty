import React, {FC} from 'react';
import {NavListStyled, NavItemStyled, NavLinkStyled} from "./styled";

const NavList: FC = () => {
    return (
        <NavListStyled>
            <NavItemStyled>
                <NavLinkStyled to={'/'}>Characters</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
                <NavLinkStyled to={'#'}>Locations</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
                <NavLinkStyled to={'#'}>Episodes</NavLinkStyled>
            </NavItemStyled>
        </NavListStyled>
    );
};

export default NavList;