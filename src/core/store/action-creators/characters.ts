import axios from "axios";
import {AppDispatch} from "../store";
import {
    charactersFetchingSuccess,
    charactersFetching,
    charactersFetchingError,
    getTotalPages
} from "../reducers/characters-slice";

export const fetchCharacters = (page: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(charactersFetching);
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const characters = response.data.results;
            const totalPage = response.data.info.pages;
            dispatch(getTotalPages(totalPage));
            dispatch(charactersFetchingSuccess(characters));
        } catch (e: any) {
            dispatch(charactersFetchingError(e.message));
        }
    }
};