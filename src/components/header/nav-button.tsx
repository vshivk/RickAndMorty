import React, {FC} from 'react';
import close from "../../assets/svg/close.svg";
import open from "../../assets/svg/open.svg";
import {NavButtonStyled} from "./styled";

interface INavButtonProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavButton:FC<INavButtonProps> = ({isOpen,setIsOpen}) => {
    return (
        <NavButtonStyled onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : open} alt="toggle_button"/>
        </NavButtonStyled>
    );
};

export default NavButton;