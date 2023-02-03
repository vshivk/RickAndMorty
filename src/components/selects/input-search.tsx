import React, {FC} from 'react';

interface IInputSearchProps {
    placeholder: string,
}
const InputSearch:FC<IInputSearchProps> = ({placeholder}) => {
    return (
        <input
            type="search"
            className={'input-search input-filter'}
            placeholder={placeholder}
        />
    );
};

export default InputSearch;