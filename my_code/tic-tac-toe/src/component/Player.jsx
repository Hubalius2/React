import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) onChangeName(symbol, playerName);
    }

    function handleSaveClick(event) {
        setPlayerName(event.target.value);
    }

    let playerNameJsx = <span className="player-name">{playerName}</span>;
    //let buttonText = "Edit";

    if (isEditing) {
        playerNameJsx = (
            <input type="text" required value={playerName}  onChange={handleSaveClick} />
        );
        //buttonText = "Save";
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player-info">
                {playerNameJsx}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}