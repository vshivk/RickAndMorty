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
        charactersFetchingSuccess(state, action: PayloadAction<Character[]>) {
            state.isLoading = false;
            state.error = '';
            state.currentPage += 1;
            state.characters = [...state.characters, ...action.payload];
        },
        charactersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    }
});
export const {
    charactersFetching,
    charactersFetchingSuccess,
    charactersFetchingError,
    setCurrentPage
} = charactersSlice.actions;
export const selectCharacters = (state: RootState) => state.characters;
export default charactersSlice.reducer;