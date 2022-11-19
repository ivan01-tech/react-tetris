// Components
import Stage from "./Stages/Stage";
import Dispaly from "./Dispay/Display";

// Helpers Functions
import { TetrisRow, TetrisWrapper } from "./tetris.elements.js";
import { createStage, checkCollisions } from "../Utils/gameHelper";

// Hooks
import { useState } from "react";
import { usePlayer } from "../Hooks/usePalyer";
import { useStage } from "../Hooks/useStage";
import useInterval from "../Hooks/useSetInterval";
import useScore from "../Hooks/useScore";

function TetrisCame() {
  const [dropDownTime, setDropDownTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, resetPlayer, rotatePlayer, updatePlayerPos } = usePlayer();
  const { stage, setStage, clearedRows } = useStage(player, resetPlayer);
  console.log("clerrazzz", clearedRows);
  const { setScore, setLevel, setRows, rows, Level, score } = useScore(
    clearedRows - 1
  );

  // a function to start the game
  const startGame = () => {
    // resetting all game properties
    setScore(0);
    setLevel(0);
    setRows(0);

    setStage(createStage());
    resetPlayer();

    setDropDownTime(1000 / (Level + 1) + 200);
    setGameOver(false);
  };
  // to move a tectromino to a specifique place in the stage
  const movePlayer = (value) => {
    if (!checkCollisions(stage, player, { x: value, y: 0 })) {
      updatePlayerPos({ x: value, y: 0, collided: false });
    }
  };

  // Drop the palyer to the bottom of the stage
  const dropPlayer = () => {
    setDropDownTime(null);
    drop();
  };

  // A callback use to handle the key Down event
  const onKeyDownHelper = function (e) {
    if (!gameOver) {
      console.log(e.keyCode);
      if (e.keyCode === 37) movePlayer(-1);
      else if (e.keyCode === 39) movePlayer(1);
      else if (e.keyCode === 40) {
        // we stop the timeout we the user press the arrowDown button
        dropPlayer();
      } else if (e.keyCode === 38) rotatePlayer(stage, 1);
    } else {
      alert("Game Over");
    }
  };

  // we stop the timeout went the user press the arrowDown button and resume it after
  const onKeyUpHelper = function (e) {
    if (e.keyCode === 40) {
      setDropDownTime(1000 / (Level + 1) + 200);
    }
  };

  const drop = function () {
    // Increase Level
    if (rows > (Level + 1) * 10) {
      setDropDownTime(1000 / (Level + 1) + 200);
      setLevel((prev) => prev + 1);
      console.log("here we go");
    }

    if (!checkCollisions(stage, player, { x: 0, y: 1 }))
      updatePlayerPos({ x: 0, y: 1, collided: false });
    else {
      if (player.position.y < 1) {
        setGameOver(true);
        setDropDownTime(null);
        console.log("GAME OVER");
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  // [stage, player, updatePlayerPos]

  console.log("re-render");

  // drop down the player
  // useEffect(() => {
  //   if (!gameOver) {
  //     const timer = setInterval(drop, dropDownTime);
  //     return () => clearInterval(timer);
  //   }
  // }, [gameOver, dropDownTime, drop]);

  useInterval(drop, dropDownTime);

  return (
    <TetrisWrapper
      role={"button"}
      onKeyUp={onKeyUpHelper}
      tabIndex="0"
      onKeyDown={onKeyDownHelper}
    >
      <TetrisRow>
        <Stage stage={stage} />
        <Dispaly
          rows={rows}
          Level={Level}
          score={score}
          gameOver={gameOver}
          startGame={startGame}
        />
      </TetrisRow>
    </TetrisWrapper>
  );
}

export default TetrisCame;
