import React, {FC} from 'react';
import {
    CharacterDescriptionItem,
    CharacterDescriptionItemDate,
    CharacterDescriptionItemLink,
    CharacterDescriptionItemName, ItemLinkInfo
} from "./styled";
import arrow from "../../assets/svg/arrow-right.svg";
import { Flex } from '../../styled';

const EpisodesItems:FC = () => {
    return (
        <>
            <CharacterDescriptionItem>
                <CharacterDescriptionItemLink to={'/'}>
                    <ItemLinkInfo>
                        <CharacterDescriptionItemName>S01E01</CharacterDescriptionItemName>
                        <span>Pilot</span>
                        <CharacterDescriptionItemDate>December 2, 2013</CharacterDescriptionItemDate>
                    </ItemLinkInfo>
                    <Flex>
                        <img src={arrow} alt="arrow"/>
                    </Flex>
                </CharacterDescriptionItemLink>
            </CharacterDescriptionItem>
        </>
    );
};

export default EpisodesItems;