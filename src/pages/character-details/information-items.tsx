import React, {FC} from 'react';
import {
    CharacterDescriptionItem,
    CharacterDescriptionItemLink,
    CharacterDescriptionItemName,
    ItemLinkInfo
} from "./styled";
import {Character} from "../../core/types/characters";
import {Flex} from "../../styled";
import arrow from "../../assets/svg/arrow-right.svg";
interface IInformationItemsProps {
    currentCharacter: Character
}
const InformationItems:FC<IInformationItemsProps> = ({currentCharacter}) => {
    return (
        <>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemName>Gender</CharacterDescriptionItemName>
                <span>{currentCharacter.gender}</span>
            </CharacterDescriptionItem>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemName>Status</CharacterDescriptionItemName>
                <span>{currentCharacter.status}</span>
            </CharacterDescriptionItem>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemName>Specie</CharacterDescriptionItemName>
                <span>{currentCharacter.species}</span>
            </CharacterDescriptionItem>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemName>Origin</CharacterDescriptionItemName>
                <span>{currentCharacter.origin.name}</span>
            </CharacterDescriptionItem>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemName>Type</CharacterDescriptionItemName>
                <span>{currentCharacter.type !== '' ? currentCharacter.type : 'unknown'}</span>
            </CharacterDescriptionItem>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemLink to={'/'}>
                    <ItemLinkInfo>
                        <CharacterDescriptionItemName>Location</CharacterDescriptionItemName>
                        <span>{currentCharacter.location.name}</span>
                    </ItemLinkInfo>
                    <Flex>
                        <img src={arrow} alt="arrow"/>
                    </Flex>
                </CharacterDescriptionItemLink>
            </CharacterDescriptionItem>
        </>
    );
};

export default InformationItems;