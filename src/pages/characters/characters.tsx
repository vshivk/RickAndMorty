import React, {FC} from 'react';
import rick from "../../assets/rick.png";
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";
import {
    CharactersMainStyled,
    CharactersFiltrationStyled,
    CharactersItemImgStyled,
    CharactersItemDescriptionStyled
} from "./styled";
import {CardsItemStyled, CardsListStyled, CardsWrapStyled} from "../../styled";
import Button from "../../components/button/button";
import CoverImg from "./cover-img";

const Characters: FC = () => {
    return (
        <>
            <CoverImg
                width={'300px'}
                height={'100px'}
            />
            <CharactersMainStyled>
                <CharactersFiltrationStyled>
                    <InputSearch placeholder={'Filter by name...'}/>
                    <InputSelect placeholder={'Species'}/>
                    <InputSelect placeholder={'Gender'}/>
                    <InputSelect placeholder={'Status'}/>
                </CharactersFiltrationStyled>
                <CardsWrapStyled>
                    <CardsListStyled>
                        <li>
                            <a href="">
                                <CardsItemStyled>
                                    <CharactersItemImgStyled src={rick} alt=""/>
                                    <CharactersItemDescriptionStyled>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescriptionStyled>
                                </CardsItemStyled>
                            </a>
                        </li>
                    </CardsListStyled>
                    <Button/>
                </CardsWrapStyled>
            </CharactersMainStyled>
        </>
    );
};

export default Characters;