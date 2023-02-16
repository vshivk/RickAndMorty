import React, {FC} from 'react';
import {InputSelectStyled} from "./styled"
import {SelectType} from "../../core/types/characters";

interface IInputSelectProps {
    name: string,
    data: SelectType[]
}

const InputSelect: FC<IInputSelectProps> = ({name, data}) => {
    return (
        <InputSelectStyled name={name} id={name}>
            {data.map(item =>
                <option key={item.id} value={item.name}>{item.name}</option>
            )}
        </InputSelectStyled>
    );
};

export default InputSelect;