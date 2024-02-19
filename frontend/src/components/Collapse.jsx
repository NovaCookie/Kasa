import  '../styles/Collapse.css';
import React, { useState } from 'react';
import arrow_down from '../assets/images/arrow_down.png'
import arrow_up from '../assets/images/arrow_up.png'


function Collapse({ titre, information }) {

     const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Collapses_pt'>
            <div className='collapse_header' onClick={() => setIsOpen(!isOpen)}>
                <h2>{titre}</h2>
                <div className='icon'>
                    <img src={(isOpen ? arrow_up : arrow_down)} alt='toggle' ></img>
                </div>
            </div>
            <div className={`wrapper ${isOpen ? "open" : ""}`}>
                {typeof information === 'string' ? (
                    // Si la description est un string, on affiche un paragraphe
                <div className='inner'>
                    <p className='information'> {information}</p>
                
                    </div>
                ) : (
                    // Si la description n'est pas un string, on affiche une liste
                    <div className='inner'>
                    <ul className='information equipment'>
                        {information.map((information, index) => (
                            // `map()` : parcour chaque élément du tableau et retourne une nouvelle liste d'éléments, qui s'afficheront dans une liste.
                            <li key={index}>{information}</li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>

        </div>
    );
}
export default Collapse;

