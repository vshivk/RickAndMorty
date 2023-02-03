import React, {FC} from 'react';

interface IInputSelectProps {
    placeholder: string,
}
const InputSelect:FC<IInputSelectProps> = ({placeholder}) => {
    return (
        <input
            type="text"
            className={'input-select input-filter'}
            placeholder={placeholder}
        />
    );
};

export default InputSelect;