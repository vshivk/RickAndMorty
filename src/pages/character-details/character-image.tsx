import React, {FC} from 'react';
import {CharacterImg, CharacterImgWrap} from "./styled";
import {Character} from "../../core/types/characters";

interface ICharacterImageProps {
    currentCharacter: Character
}

const CharacterImage: FC<ICharacterImageProps> = ({currentCharacter}) => {
    return (
        <CharacterImgWrap>
            <CharacterImg src={currentCharacter.image} alt={currentCharacter.name}/>
            <h3>{currentCharacter.name}</h3>
        </CharacterImgWrap>
    );
};

export default CharacterImage;