import React, {FC, useEffect} from 'react';
import CoverImg from "./cover-img";
import Filtration from "./filtration";
import Cards from "./cards";
import {SectionContentStyled} from '../../styled';
import {fetchCharacters} from "../../core/store/action-creators/characters";
import {useActions} from "../../core/hooks/use-actions";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters} from "../../core/store/reducers/characters-slice";

const Characters: FC = () => {
    const {fetchCharacters} = useActions();
    const {currentPage} = useAppSelector(selectCharacters);

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    return (
        <>
            <CoverImg
                widthImg={'300px'}
                heightImg={'100px'}
            />
            <SectionContentStyled>
                <Filtration/>
                <Cards/>
            </SectionContentStyled>
        </>
    );
};

export default Characters;