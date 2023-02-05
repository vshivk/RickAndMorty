import React, {FC, useState} from 'react';
import './style.scss';
import logo from "../../assets/svg/logo.svg";
import close from "../../assets/svg/close.svg";
import open from "../../assets/svg/open.svg";
import {Container} from "../../styled";
import {
    NavWrap,
    NavInner,
    NavLogo,
    NavLink,
    NavButton,
    NavList,
    NavItem,
    NavContent
} from "./styled";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavWrap>
            <Container>
                <NavInner>
                    <NavLogo>
                        <NavLink to={'/'}>
                            <img src={logo} alt="logo"/>
                        </NavLink>
                        <NavButton onClick={() => setIsOpen(!isOpen)}>
                            <img src={isOpen ? close : open} alt="toggle_button"/>
                        </NavButton>
                    </NavLogo>
                    <NavContent className={isOpen ? 'nav-open' : ''}>
                        <NavList>
                            <NavItem>
                                <NavLink to={'/'}>Characters</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'locations'}>Locations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'episodes'}>Episodes</NavLink>
                            </NavItem>
                        </NavList>
                    </NavContent>
                </NavInner>
            </Container>
        </NavWrap>
    );
};

export default Header;