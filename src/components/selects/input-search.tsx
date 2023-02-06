import React, {FC} from 'react';
import {InputSearchStyled} from "./styled";

interface IInputSearchProps {
    placeholder: string,
}

const InputSearch: FC<IInputSearchProps> = ({placeholder}) => {
    return (
        <InputSearchStyled
            type="search"
            placeholder={placeholder}
        />
    );
};

export default InputSearch;