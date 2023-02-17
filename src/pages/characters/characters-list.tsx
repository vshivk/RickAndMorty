import React, {Dispatch, FC, useEffect, useMemo} from 'react';
import {CardsListStyled} from "../../styled";
import CharactersItem from "./characters-item";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {filterCharacters, selectCharacters} from "../../core/store/reducers/characters-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {Character} from "../../core/types/characters";

interface ICharactersListProps {
    species: string,
    gender: string,
    status: string,
    setFilteredCharacters: Dispatch<React.SetStateAction<Character[]>>,
    filteredCharacters: Character[]
}

const CharactersList: FC<ICharactersListProps> = ({status, species, gender,setFilteredCharacters,filteredCharacters}) => {
    const {characters} = useAppSelector(selectCharacters);
    // const includesOption = (arr: string[], values: string[]) => {
    //     return values.some(value => arr.includes(value));
    // }
    // const selectOption = () => {
    //     return characters.filter(character => {
    //         const {status: characterStatus, species: characterSpecies, gender: characterGender} = character;
    //         return includesOption([status, species, gender], [characterStatus, characterSpecies, characterGender]);
    //     });
    // }
    //
    // useEffect(() => {
    //     setFilteredCharacters(selectOption());
    // }, [status, species, gender]);

    return (
        <CardsListStyled>
            {filteredCharacters.map(character =>
                <CharactersItem key={character.id} character={character}/>
            )}
        </CardsListStyled>
    );
};

export default CharactersList;