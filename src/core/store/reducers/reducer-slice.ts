import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    characters: [],
    locations: [],
    episodes: [],
    isLoading: false,
    currentPage: 1,
    error: '',
}

export const reducerSlice = createSlice({
    name: 'rickAndMorty',
    initialState,
    reducers: {}
});