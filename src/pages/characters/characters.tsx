import React, {FC, useEffect, useState} from 'react';
import CoverImg from "../../components/cover-img/cover-img";
import CharactersFiltration from "./characters-filtration";
import Cards from "./cards";
import {SectionContentStyled} from '../../styled';
import {fetchCharacters} from "../../core/store/action-creators/characters";
import {useActions} from "../../core/hooks/use-actions";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters} from "../../core/store/reducers/characters-slice";
import logoCharacters from "../../assets/cover-characters.png";

const Characters: FC = () => {
    const {fetchCharacters} = useActions();
    const {characters,currentPage} = useAppSelector(selectCharacters);
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState(characters);

    useEffect(() => {
        fetchCharacters(currentPage,setFilteredCharacters,filteredCharacters);
    }, [currentPage]);
    return (
        <>
            <CoverImg
                widthImg={'300px'}
                heightImg={'100px'}
                img={logoCharacters}
                alt={'cover-characters'}
            />
            <SectionContentStyled>
                <CharactersFiltration
                    setSpecies={setSpecies}
                    setGender={setGender}
                    setStatus={setStatus}
                    filteredCharacters={filteredCharacters}
                    setFilteredCharacters={setFilteredCharacters}
                    characters={characters}
                />
                <Cards
                    species={species}
                    gender={gender}
                    status={status}
                    filteredCharacters={filteredCharacters}
                    setFilteredCharacters={setFilteredCharacters}
                />
            </SectionContentStyled>
        </>
    );
};

export default Characters;