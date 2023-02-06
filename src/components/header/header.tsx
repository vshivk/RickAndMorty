import React, {FC, useState} from 'react';
import {Container} from "../../styled";
import Nav from "./nav";
import NavLogo from "./nav-logo";
import {NavWrapStyled, NavInnerStyled} from './styled';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavWrapStyled>
            <Container>
                <NavInnerStyled>
                    <NavLogo
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <Nav display={isOpen ? 'block' : 'none'}/>
                </NavInnerStyled>
            </Container>
        </NavWrapStyled>
    );
};

export default Header;