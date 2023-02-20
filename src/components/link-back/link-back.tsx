import React, {FC} from 'react';
import {LinkBackStyled} from "../../styled";
import arrow from "../../assets/svg/arrow.svg";
import {LinkBackWrap} from "../../pages/character-details/styled";

const LinkBack:FC = () => {
    return (
        <LinkBackWrap>
            <LinkBackStyled to={'/'}>
                <img src={arrow} alt="arrow-back"/>
                GO BACK
            </LinkBackStyled>
        </LinkBackWrap>
    );
};

export default LinkBack;