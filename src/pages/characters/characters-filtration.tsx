import React, {Dispatch, FC, SetStateAction} from 'react';
import {CharactersFiltrationStyled} from "./styled";
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";
import {genders, species, statuses} from "../../core/consts/characters";
import {Character} from "../../core/types/characters";

interface IFiltrationProps {
    setSpecies: Dispatch<SetStateAction<string>>,
    setGender: Dispatch<SetStateAction<string>>,
    setStatus: Dispatch<SetStateAction<string>>,
    setFilteredCharacters: Dispatch<React.SetStateAction<Character[]>>,
    filteredCharacters: Character[],
    characters: Character[]
}

const CharactersFiltration: FC<IFiltrationProps> = ({setSpecies, setStatus, setGender,filteredCharacters,setFilteredCharacters,characters}) => {
    return (
        <CharactersFiltrationStyled>
            <InputSearch
                placeholder={'Filter by name...'}
                filteredCards={filteredCharacters}
                setFilteredCards={setFilteredCharacters}
                cards={characters}
            />
            <InputSelect
                name={'Species'}
                data={species}
                setValue={setSpecies}
            />
            <InputSelect
                name={'Gender'}
                data={genders}
                setValue={setStatus}
            />
            <InputSelect
                name={'Status'}
                data={statuses}
                setValue={setGender}
            />
        </CharactersFiltrationStyled>
    );
};

export default CharactersFiltration;