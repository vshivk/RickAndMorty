import React, {FC} from 'react';
import {NavLinkStyled, NavLogoStyled} from "./styled";
import logo from "../../assets/svg/logo.svg";
import NavButton from "./nav-button";

interface INavLogoProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLogo: FC<INavLogoProps> = ({isOpen, setIsOpen}) => {
    return (
        <NavLogoStyled>
            <NavLinkStyled to={'/'}>
                <img src={logo} alt="logo"/>
            </NavLinkStyled>
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </NavLogoStyled>
    );
};

export default NavLogo;