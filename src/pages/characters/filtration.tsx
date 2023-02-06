import React, {FC} from 'react';
import {CharactersFiltrationStyled} from "./styled";
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";

const Filtration: FC = () => {
    return (
        <CharactersFiltrationStyled>
            <InputSearch placeholder={'Filter by name...'}/>
            <InputSelect placeholder={'Species'}/>
            <InputSelect placeholder={'Gender'}/>
            <InputSelect placeholder={'Status'}/>
        </CharactersFiltrationStyled>
    );
};

export default Filtration;