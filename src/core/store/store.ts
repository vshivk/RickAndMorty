import {combineReducers, configureStore} from "@reduxjs/toolkit";
import characters from "./reducers/characters-slice";

const rootReducer = combineReducers({characters});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];