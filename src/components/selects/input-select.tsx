import React, {Dispatch, FC, SetStateAction} from 'react';
import {InputSelectStyled} from "./styled"
import {SelectType} from "../../core/types/characters";

interface IInputSelectProps {
    name: string,
    data: SelectType[],
    setValue: Dispatch<SetStateAction<string>>,
}

const InputSelect: FC<IInputSelectProps> = ({name, data, setValue}) => {

    return (
        <InputSelectStyled name={name} id={name} defaultValue={name} onChange={(e) => setValue(e.target.value)}>
            <option value={name} hidden>{name}</option>
            {data.map(item =>
                <option key={item.id} value={item.name}>{item.name}</option>
            )}
        </InputSelectStyled>
    );
};

export default InputSelect;