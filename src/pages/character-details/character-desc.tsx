import React, {FC} from 'react';
import CharacterInformation from "./character-information";
import CharacterEpisodes from "./character-episodes";
import {CharacterDescription} from "./styled";
import {Character} from "../../core/types/characters";
interface ICharacterDescProps {
    currentCharacter: Character
}
const CharacterDesc:FC<ICharacterDescProps> = ({currentCharacter}) => {
    return (
        <CharacterDescription>
            <CharacterInformation
                currentCharacter={currentCharacter}
            />
            <CharacterEpisodes
                currentCharacter={currentCharacter}
            />
        </CharacterDescription>
    );
};

export default CharacterDesc;