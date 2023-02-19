import React, {Dispatch, FC, useEffect, useMemo} from 'react';
import {CardsListStyled} from "../../styled";
import CharactersItem from "./characters-item";
import {Character} from "../../core/types/characters";

interface ICharactersListProps {
    species: string,
    gender: string,
    status: string,
    setFilteredCharacters: Dispatch<React.SetStateAction<Character[]>>,
    filteredCharacters: Character[]
}

const CharactersList: FC<ICharactersListProps> = ({status, species, gender,setFilteredCharacters,filteredCharacters}) => {
    return (
        <CardsListStyled>
            {filteredCharacters.map(character =>
                <CharactersItem key={character.id} character={character}/>
            )}
        </CardsListStyled>
    );
};

export default CharactersList;