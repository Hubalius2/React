import React, { useState, useRef } from 'react';

export default function Player() {

  const playerNameInputRef = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerNameInputRef.current.value);
    playerNameInputRef.current.value = '';
  }

  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ?? "Unknown entity"}</h2> */}
      <h2>Welcome {enteredPlayerName || "Unknown entity"}</h2>
      <p>
        <input ref={playerNameInputRef} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
