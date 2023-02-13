import React, {FC, useEffect} from 'react';
import {Flex} from '../../styled';
import {ButtonLoadStyled} from "./styled";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters, setCurrentPage} from "../../core/store/reducers/characters-slice";
import {fetchCharacters} from "../../core/store/action-creators/characters";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";

const Button: FC = () => {
    const {currentPage,characters} = useAppSelector(selectCharacters);
    const dispatch = useAppDispatch();

    const loadCharacters = () => {
        dispatch(setCurrentPage(currentPage+1))
    }

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage])

    return (
        <Flex>
            <ButtonLoadStyled type={'button'} onClick={loadCharacters}>LOAD MORE</ButtonLoadStyled>
        </Flex>
    );
};

export default Button;