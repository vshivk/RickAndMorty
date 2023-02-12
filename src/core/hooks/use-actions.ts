import {useAppDispatch} from "./use-app-dispatch";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as CharactersActionCreators from "../store/action-creators/characters";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(CharactersActionCreators, dispatch);
}