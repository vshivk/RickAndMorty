import React, {FC} from 'react';
import {CharacterImg} from "./styled";
import {Character} from "../../core/types/characters";

interface ICharacterImageProps {
    currentCharacter: Character
}

const CharacterImage: FC<ICharacterImageProps> = ({currentCharacter}) => {
    return (
        <div>
            <CharacterImg src={currentCharacter.image} alt={currentCharacter.name}/>
            <h3>{currentCharacter.name}</h3>
        </div>
    );
};

export default CharacterImage;