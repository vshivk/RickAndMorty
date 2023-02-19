import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {CardsItemStyled} from "../../styled";
import {CharactersItemDescriptionStyled, CharactersItemImgStyled} from "./styled";
import {Character} from "../../core/types/characters";

interface ICharactersItemProps {
    character: Character,
}

const CharactersItem: FC<ICharactersItemProps> = ({character}) => {
    const {image, name, species} = character;
    const navigate = useNavigate();

    return (
        <li>
            <Link to={`character/${character.id}`} onClick={() => navigate(`character/${character.id}`)}>
                <CardsItemStyled>
                    <CharactersItemImgStyled src={image} alt={name}/>
                    <CharactersItemDescriptionStyled>
                        <h6>{name}</h6>
                        <span>{species}</span>
                    </CharactersItemDescriptionStyled>
                </CardsItemStyled>
            </Link>
        </li>
    );
};

export default CharactersItem;