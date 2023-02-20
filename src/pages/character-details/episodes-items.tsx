import React, {FC} from 'react';
import {
    CharacterDescriptionItem,
    CharacterDescriptionItemDate,
    CharacterDescriptionItemLink,
    CharacterDescriptionItemName
} from "./styled";

const EpisodesItems:FC = () => {
    return (
        <>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemLink to={'/'}>
                    <CharacterDescriptionItemName>S01E01</CharacterDescriptionItemName>
                    <span>Pilot</span>
                    <CharacterDescriptionItemDate>December 2, 2013</CharacterDescriptionItemDate>
                </CharacterDescriptionItemLink>
            </CharacterDescriptionItem>
        </>
    );
};

export default EpisodesItems;