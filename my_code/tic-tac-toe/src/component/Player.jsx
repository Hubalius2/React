import { useState } from 'react';

export default function Player({ name, symbol }) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
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
        <li>
            <span className="player-info">
                {playerNameJsx}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}