import React, {FC, useEffect} from 'react';
import CoverImg from "./cover-img";
import Filtration from "./filtration";
import Cards from "./cards";
import {SectionContentStyled} from '../../styled';
import {fetchCharacters} from "../../core/store/action-creators/characters";
import {useActions} from "../../core/hooks/use-actions";

const Characters: FC = () => {
    const {fetchCharacters} = useActions();

    useEffect(() => {
        fetchCharacters();
    }, []);

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