import React, {FC} from 'react';
import {NavContentStyled} from "./styled";
import NavList from "./nav-list";

export interface INavProps {
    display: string;
}

const Nav: FC<INavProps> = (props) => {
    return (
        <NavContentStyled {...props}>
            <NavList/>
        </NavContentStyled>
    );
};

export default Nav;