import React, {FC} from 'react';
import logoCharacters from "../../assets/logo-characters.png";
import "./style.scss"

const Characters: FC = () => {
    return (
        <div className={'characters'}>
            <div className={'characters-image'}>
                <img className={'characters-image-cover'} src={logoCharacters} alt="logo-characters"/>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Characters;