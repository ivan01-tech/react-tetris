import React from "react";
import Button from "../Buttons/Button";
import StarButton from "../StartButton";
import { DisplayWrapper } from "./display.elements.js";

function Display({ startGame, gameOver, rows, Level, score }) {
  return (
    <DisplayWrapper>
      {gameOver ? (
        <Button text="Game Over" gameOver />
      ) : (
        <>
          <Button text={`Level: ${Level}`} />
          <Button text={`Rows :  ${rows}`} />
          <Button text={`Score :  ${score}`} />
        </>
      )}
      <StarButton gameOver={gameOver} callback={startGame} />
    </DisplayWrapper>
  );
}

export default Display;
