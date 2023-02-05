import React, {FC} from 'react';
import logoCharacters from "../../assets/logo-characters.png";
import rick from "../../assets/rick.png";
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";
import {
    CharactersImg,
    CharactersImgCover,
    CharactersMain,
    CharactersFiltration,
    CharactersWrap,
    CharactersList,
    CharactersItemFigure,
    CharactersItemImg,
    CharactersItemDescription,
    Button, ButtonLoad
} from "./styled";

const Characters: FC = () => {
    return (
        <>
            <CharactersImg>
                <CharactersImgCover src={logoCharacters} alt="logo-characters"/>
            </CharactersImg>
            <CharactersMain>
                <CharactersFiltration>
                    <InputSearch placeholder={'Filter by name...'}/>
                    <InputSelect placeholder={'Species'}/>
                    <InputSelect placeholder={'Gender'}/>
                    <InputSelect placeholder={'Status'}/>
                </CharactersFiltration>
                <CharactersWrap>
                    <CharactersList>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CharactersItemFigure>
                                    <CharactersItemImg src={rick} alt=""/>
                                    <CharactersItemDescription>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </CharactersItemDescription>
                                </CharactersItemFigure>
                            </a>
                        </li>
                    </CharactersList>
                    <Button>
                        <ButtonLoad type={'button'}>LOAD MORE</ButtonLoad>
                    </Button>
                </CharactersWrap>
            </CharactersMain>
        </>
    );
};

export default Characters;