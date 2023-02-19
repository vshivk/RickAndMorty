import React, {FC} from 'react';
import {useParams} from "react-router";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCharacters} from "../../core/store/reducers/characters-slice";
import {Link} from "react-router-dom";

const Character: FC = () => {
    const {id} = useParams();
    const {characters} = useAppSelector(selectCharacters);
    const currentCharacter = characters.find(character => character.id === Number(id));

    if (!currentCharacter) {
        return <div>Character not found</div>;
    }

    return (
        <>
            <div style={{display: 'grid', gridTemplateColumns: "1.2fr 2fr"}}>
                <div>
                    <Link style={{fontSize: '18px', fontWeight: '700'}} to={'/'}>← GO BACK</Link>
                </div>
                <div>
                    <img style={{objectFit: 'cover', border: '5px solid #F2F2F7', borderRadius: '100%'}}
                         src={currentCharacter.image} alt={currentCharacter.name}/>
                    <h3>{currentCharacter.name}</h3>
                </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", padding: '30px 80px', gap: '20px'}}>
                <div>
                    <p style={{color: '#8E8E93'}}>Informations</p>
                    <ul style={{paddingTop: '35px'}}>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <p style={{fontSize: '16px'}}>Gender</p>
                            <span>{currentCharacter.gender}</span>
                        </li>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <p style={{fontSize: '16px'}}>Status</p>
                            <span>{currentCharacter.status}</span>
                        </li>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <p style={{fontSize: '16px'}}>Specie</p>
                            <span>{currentCharacter.species}</span>
                        </li>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <p style={{fontSize: '16px'}}>Origin</p>
                            <span>{currentCharacter.origin.name}</span>
                        </li>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <p style={{fontSize: '16px'}}>Type</p>
                            <span>{currentCharacter.type !== '' ? currentCharacter.type : 'unknown'}</span>
                        </li>
                        <li style={{borderBottom: '1px solid rgba(33, 33, 33, 0.08)', padding: '10px 16px'}}>
                            <a href="#">
                                <p style={{fontSize: '16px'}}>Location</p>
                                <span>{currentCharacter.gender}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p style={{color: '#8E8E93'}}>Episodes</p>
                </div>
            </div>
        </>
    );
};

export default Character;