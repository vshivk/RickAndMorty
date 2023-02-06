import React, {FC} from 'react';
import CoverImg from "./cover-img";
import Filtration from "./filtration";
import Cards from "./cards";
import {SectionContentStyled} from '../../styled';

const Characters: FC = () => {
    return (
        <>
            <CoverImg
                width={'300px'}
                height={'100px'}
            />
            <SectionContentStyled>
                <Filtration/>
                <Cards/>
            </SectionContentStyled>
        </>
    );
};

export default Characters;