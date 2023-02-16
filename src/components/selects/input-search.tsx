import React, {FC, useEffect, useState} from 'react';
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
}

const InputSearch: FC<IInputSearchProps> = ({placeholder}) => {
    const [searchValue,setSearchValue] = useState('');
    const {characters} = useAppSelector(selectCharacters);
    const dispatch = useAppDispatch();

    const filteredCharacters = (searchValue: string, charactersList: Character[]) => {
        if (!searchValue) return charactersList;
        return characters.filter(({name}) =>
            name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    useEffect(() => {
        dispatch(filterCharacters(filteredCharacters(searchValue, characters)));
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