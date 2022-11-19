import React from "react";
import MemoryImage from "./MemoryImage";

function MemoryGame() {
  return (
    <div>
      <h1>Magic Match</h1>
      <button>New game</button>
      <main>
        <MemoryImage />
      </main>
      <p>Turns: 10</p>
    </div>
  );
}

export default MemoryGame;
