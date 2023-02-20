import React, {FC} from 'react';
import {TextColorGray} from "../../styled";
import {
    CharacterDescriptionList
} from "./styled";
import {Character} from "../../core/types/characters";
import EpisodesItems from "./episodes-items";

interface ICharacterEpisodesProps {
    currentCharacter: Character
}
const CharacterEpisodes:FC<ICharacterEpisodesProps> = ({currentCharacter}) => {
    return (
        <div>
            <TextColorGray>Episodes</TextColorGray>
            <CharacterDescriptionList>
                <EpisodesItems/>
            </CharacterDescriptionList>
        </div>
    );
};

export default CharacterEpisodes;