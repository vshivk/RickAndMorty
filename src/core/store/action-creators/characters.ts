import axios from "axios";
import {AppDispatch} from "../store";
import {charactersAdding, charactersFetching} from "../reducers/characters-slice";

export const fetchCharacters = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(charactersFetching)
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const characters = response.data.results;
            dispatch(charactersAdding(characters));
        } catch (e: any) {
            console.log(e.message);
        }
    }
};