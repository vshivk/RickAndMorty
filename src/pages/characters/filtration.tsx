import React, {FC} from 'react';
import {CharactersFiltrationStyled} from "./styled";
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";
import {genders, species, statuses} from "../../core/consts/characters";

const Filtration: FC = () => {
    return (
        <CharactersFiltrationStyled>
            <InputSearch placeholder={'Filter by name...'}/>
            <InputSelect name={'Species'} data={species}/>
            <InputSelect name={'Gender'} data={genders}/>
            <InputSelect name={'Status'} data={statuses}/>
        </CharactersFiltrationStyled>
    );
};

export default Filtration;