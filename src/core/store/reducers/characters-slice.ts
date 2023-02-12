import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Character, GeneralState} from "../../types/characters";

export const initialState: GeneralState = {
    characters: [],
    locations: [],
    episodes: [],
    isLoading: false,
    currentPage: 1,
    error: '',
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        charactersFetching(state) {
            state.isLoading = true;
        },
        charactersAdding(state, action: PayloadAction<Character[]>) {
            state.characters = [...state.characters, ...action.payload];
            state.isLoading = false;
        }
    }
});
export const {charactersFetching, charactersAdding} = charactersSlice.actions;
export const charactersReducer = (state: RootState) => state.characters.characters;
export default charactersSlice.reducer;