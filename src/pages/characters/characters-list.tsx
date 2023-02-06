import React, {FC} from 'react';
import {CardsListStyled} from "../../styled";
import CharactersItem from "./characters-item";

const CharactersList: FC = () => {
    return (
        <CardsListStyled>
            <CharactersItem/>
        </CardsListStyled>
    );
};

export default CharactersList;