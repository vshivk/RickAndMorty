import React, {FC} from 'react';
import {useParams} from "react-router";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters} from "../../core/store/reducers/characters-slice";
import './styled';
import {
    CharacterInner
} from './styled';
import LinkBack from "../../components/link-back/link-back";
import CharacterImage from "./character-image";
import CharacterDesc from "./character-desc";

const Character: FC = () => {
    const {id} = useParams();
    const {characters} = useAppSelector(selectCharacters);
    const currentCharacter = characters.find(character => character.id === Number(id));

    if (!currentCharacter) {
        return <div>Character not found</div>;
    }

    return (
        <>
            <CharacterInner>
                <LinkBack/>
                <CharacterImage currentCharacter={currentCharacter}/>
            </CharacterInner>
            <CharacterDesc currentCharacter={currentCharacter}/>
        </>
    );
};

export default Character;