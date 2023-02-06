import axios from "axios";
import {AppDispatch} from "../store";

export const fetchCharacters = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const characters = response.data;
            console.log(characters);
        } catch (e: any) {
            console.log(e.message);
        }
    }
};