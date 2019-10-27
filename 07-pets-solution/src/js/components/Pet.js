import React from 'react';

import { ICONS } from './../enums';

const Pet = ({ name, type, birthyear }) => {
    const icon = ICONS[type] || '🐾';

    return (
        <li className="c-pet">
            <span className="pet-icon">{icon}</span>
            <span className="pet-info">
                {name}
                {birthyear ? <em className="pet-birthyear">(°{birthyear})</em> : null}
            </span>
        </li>
    );
}

export default Pet;