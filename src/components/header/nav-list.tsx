import React, {FC} from 'react';
import {NavListStyled, NavItemStyled, NavLinkStyled} from "./styled";

const NavList: FC = () => {
    return (
        <NavListStyled>
            <NavItemStyled>
                <NavLinkStyled to={'/'}>Characters</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
                <NavLinkStyled to={'locations'}>Locations</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
                <NavLinkStyled to={'episodes'}>Episodes</NavLinkStyled>
            </NavItemStyled>
        </NavListStyled>
    );
};

export default NavList;