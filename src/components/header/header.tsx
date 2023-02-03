import React, {FC, useState} from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import close from "../../assets/svg/close.svg";
import open from "../../assets/svg/open.svg";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={'nav-wrap'}>
            <div className={'nav-inner container'}>
                <div className={'nav-logo'}>
                    <Link to={'/'} className={'nav-link'}>
                        <img className={'nav-img'} src={logo} alt="logo"/>
                    </Link>
                    <button className={'nav-button'} onClick={()=>setIsOpen(!isOpen)}>
                        <img className={'nav-img'} src={isOpen ? close : open} alt="toggle_button"/>
                    </button>
                </div>
                <nav className={`nav-content ${isOpen ? 'nav-open' : ''}`}>
                    <ul className={'nav-list'}>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-link'}>Characters</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'locations'} className={'nav-link'}>Locations</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'episodes'} className={'nav-link'}>Episodes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;