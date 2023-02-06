import React, {FC} from 'react';
import {InputSelectStyled} from "./styled"
interface IInputSelectProps {
    placeholder: string,
}

const InputSelect: FC<IInputSelectProps> = ({placeholder}) => {
    return (
        <InputSelectStyled
            type="text"
            placeholder={placeholder}
        />
    );
};

export default InputSelect;