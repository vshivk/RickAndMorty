import React, {FC} from 'react';
import logoCharacters from "../../assets/logo-characters.png";
import rick from "../../assets/rick.png";
import "./style.scss"
import InputSearch from "../../components/selects/input-search";
import InputSelect from "../../components/selects/input-select";

const Characters: FC = () => {
    return (
        <div className={'characters'}>
            <div className={'characters-image'}>
                <img className={'characters-image-cover'} src={logoCharacters} alt="logo-characters"/>
            </div>
            <div className={'characters-main'}>
                <div className={'characters-filtration'}>
                    <InputSearch placeholder={'Filter by name...'}/>
                    <InputSelect placeholder={'Species'}/>
                    <InputSelect placeholder={'Gender'}/>
                    <InputSelect placeholder={'Status'}/>
                </div>
                <div style={{display: 'grid', gap: '40px'}}>
                    <ul className={'characters-list'}>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li className={'characters-item'}>
                            <a href="">
                                <figure className={'characters-item-figure'}>
                                    <img className={'characters-item-img'} src={rick} alt=""/>
                                    <figcaption className={'characters-item-description'}>
                                        <h6>Rick Sanchez</h6>
                                        <span>Human</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    </ul>
                    <div style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
                        <button className={'button-load'} type={"button"}>LOAD MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;