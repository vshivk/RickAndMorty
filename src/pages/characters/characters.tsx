import React, {FC} from 'react';
// @ts-ignore
import logoCharacters from "../../assets/logo-characters.png";

const Characters:FC = () => {
    return (
        <>
            <div>
                <img src={logoCharacters} alt="logo-characters"/>
            </div>
            <div></div>
        </>
    );
};

export default Characters;