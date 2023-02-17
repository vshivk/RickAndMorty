import React, {Dispatch, FC, useEffect, useState} from 'react';
import {InputSearchStyled} from "./styled";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {
    charactersFetchingSuccess,
    filterCharacters,
    selectCharacters
} from "../../core/store/reducers/characters-slice";
import {Character} from "../../core/types/characters";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";

interface IInputSearchProps {
    placeholder: string,
    setFilteredCharacters: Dispatch<React.SetStateAction<Character[]>>,
    filteredCharacters: Character[]
}

const InputSearch: FC<IInputSearchProps> = ({placeholder, filteredCharacters, setFilteredCharacters}) => {
    const [searchValue, setSearchValue] = useState('');
    const {characters} = useAppSelector(selectCharacters);

    const filterCharacters = (searchValue: string, charactersList: Character[]) => {
        if (!searchValue) return charactersList;
        return filteredCharacters.filter(({name}) =>
            name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    useEffect(() => {
        setFilteredCharacters((filterCharacters(searchValue, characters)));
    }, [searchValue]);

    return (
        <InputSearchStyled
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            type="search"
            placeholder={placeholder}
        />
    );
};

export default InputSearch;