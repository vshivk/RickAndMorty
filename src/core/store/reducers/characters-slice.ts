import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Character, GeneralState} from "../../types/characters";

export const initialState: GeneralState = {
    characters: [],
    locations: [],
    episodes: [],
    isLoading: true,
    currentPage: 1,
    totalPage: 0,
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
            state.characters = [...state.characters, ...action.payload];
        },
        charactersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setCurrentPage(state) {
            state.currentPage = state.currentPage + 1;
        },
        getTotalPages(state, action: PayloadAction<number>) {
            state.totalPage = action.payload;
        },
        filterCharacters(state, action:PayloadAction<Character[]>){
            state.characters = action.payload;
        }
    }
});
export const {
    charactersFetching,
    charactersFetchingSuccess,
    charactersFetchingError,
    setCurrentPage,
    getTotalPages,
    filterCharacters
} = charactersSlice.actions;
export const selectCharacters = (state: RootState) => state.characters;
export default charactersSlice.reducer;