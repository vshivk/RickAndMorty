import React, {FC} from 'react';
import {CardsWrapStyled} from "../../styled";
import Button from "../../components/button/button";
import CharactersList from "./characters-list";

const Cards: FC = () => {
    return (
        <CardsWrapStyled>
            <CharactersList/>
            <Button/>
        </CardsWrapStyled>
    );
};

export default Cards;