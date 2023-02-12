import React, {FC} from 'react';
import {CardsListStyled} from "../../styled";
import CharactersItem from "./characters-item";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {charactersReducer} from "../../core/store/reducers/characters-slice";

const CharactersList: FC = () => {
    const characters = useAppSelector(charactersReducer);
    return (
        <CardsListStyled>
            {characters.map(character =>
                <CharactersItem key={character.id} character={character}/>
            )}
        </CardsListStyled>
    );
};

export default CharactersList;