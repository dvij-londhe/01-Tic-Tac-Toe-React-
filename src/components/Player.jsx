import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerHTML = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerHTML = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerHTML}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
