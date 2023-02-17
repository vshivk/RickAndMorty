import React, {Dispatch, FC} from 'react';
import {CardsWrapStyled} from "../../styled";
import Button from "../../components/button/button";
import CharactersList from "./characters-list";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters} from "../../core/store/reducers/characters-slice";
import {MoonLoader} from "react-spinners";
import {Character} from "../../core/types/characters";

interface ICardsProps {
    species: string,
    gender: string,
    status: string,
    setFilteredCharacters: Dispatch<React.SetStateAction<Character[]>>,
    filteredCharacters: Character[]
}
const Cards: FC<ICardsProps> = ({status,species,gender, setFilteredCharacters,filteredCharacters}) => {
    const {error, isLoading, characters, currentPage, totalPage} = useAppSelector(selectCharacters);

    return (
        <>
            {characters.length > 0
                &&
                <CardsWrapStyled>
                    <CharactersList
                        species={species}
                        gender={gender}
                        status={status}
                        filteredCharacters={filteredCharacters}
                        setFilteredCharacters={setFilteredCharacters}
                    />
                    {!isLoading
                        &&
                        <Button/>
                    }
                    {currentPage === totalPage && <p>All characters have been loaded</p>}
                </CardsWrapStyled>
            }
            {error && <p>{error}</p>}
            <MoonLoader
                color={'#000'}
                loading={isLoading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                }}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    );
};

export default Cards;