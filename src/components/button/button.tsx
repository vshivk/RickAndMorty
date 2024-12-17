import React, {FC} from 'react';
import {Flex} from '../../styled';
import {ButtonLoadStyled} from "./styled";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import { charactersFetching, selectCharacters, setCurrentPage } from "../../core/store/reducers/characters-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";

const Button: FC = () => {
    const {currentPage, totalPage} = useAppSelector(selectCharacters);
    const dispatch = useAppDispatch();

    const setPage = () => {
        dispatch(setCurrentPage());
        dispatch(charactersFetching());
    }

    return (
        <>
            {currentPage !== totalPage
                &&
                <Flex>
                    <ButtonLoadStyled type={'button'} onClick={setPage}>LOAD MORE</ButtonLoadStyled>
                </Flex>
            }
        </>
    );
};

export default Button;