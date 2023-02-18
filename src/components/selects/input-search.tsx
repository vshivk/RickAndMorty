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
    setFilteredCards: Dispatch<React.SetStateAction<Character[]>>,
    filteredCards: Character[],
    cards: Character[]
}

const InputSearch: FC<IInputSearchProps> = ({placeholder, filteredCards, setFilteredCards, cards}) => {
    const [searchValue, setSearchValue] = useState('');

    const filterCards = (searchValue: string, cardsList: Character[]) => {
        if (!searchValue) return cardsList;
        return filteredCards.filter(({name}) =>
            name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    useEffect(() => {
        setFilteredCards((filterCards(searchValue, cards)));
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