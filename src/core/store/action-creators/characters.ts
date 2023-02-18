import axios from "axios";
import {AppDispatch} from "../store";
import {
    charactersFetchingSuccess,
    charactersFetching,
    charactersFetchingError,
    getTotalPages, filterCharacters
} from "../reducers/characters-slice";
import React, {Dispatch} from "react";
import {Character} from "../../types/characters";

export const fetchCharacters = (page: number,setFilteredCharacters:Dispatch<React.SetStateAction<Character[]>>,filteredCharacters:Character[]) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(charactersFetching);
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const characters = response.data.results;
            const totalPage = response.data.info.pages;
            dispatch(getTotalPages(totalPage));
            dispatch(charactersFetchingSuccess(characters));
            setFilteredCharacters([...filteredCharacters,...characters]);
        } catch (e: any) {
            dispatch(charactersFetchingError(e.message));
        }
    }
};