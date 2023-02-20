import React, {FC} from 'react';
import {TextColorGray} from "../../styled";
import {
    CharacterDescriptionList
} from "./styled";
import {Character} from "../../core/types/characters";
import InformationItems from "./information-items";

interface ICharacterInformationProps {
    currentCharacter: Character
}

const CharacterInformation: FC<ICharacterInformationProps> = ({currentCharacter}) => {
    return (
        <div>
            <TextColorGray>Information</TextColorGray>
            <CharacterDescriptionList>
                <InformationItems currentCharacter={currentCharacter}/>
            </CharacterDescriptionList>
        </div>
    );
};

export default CharacterInformation;