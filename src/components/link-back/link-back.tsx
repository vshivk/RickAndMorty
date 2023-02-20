import React, {FC} from 'react';
import {LinkBackStyled} from "../../styled";

const LinkBack:FC = () => {
    return (
        <div>
            <LinkBackStyled to={'/'}>← GO BACK</LinkBackStyled>
        </div>
    );
};

export default LinkBack;