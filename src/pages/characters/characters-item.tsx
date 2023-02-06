import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {CardsItemStyled} from "../../styled";
import {CharactersItemDescriptionStyled, CharactersItemImgStyled} from "./styled";
import rick from "../../assets/rick.png";

const CharactersItem: FC = () => {
    return (
        <li>
            <Link to={'character'}>
                <CardsItemStyled>
                    <CharactersItemImgStyled src={rick} alt=""/>
                    <CharactersItemDescriptionStyled>
                        <h6>Rick Sanchez</h6>
                        <span>Human</span>
                    </CharactersItemDescriptionStyled>
                </CardsItemStyled>
            </Link>
        </li>
    );
};

export default CharactersItem;