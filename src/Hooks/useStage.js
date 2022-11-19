import { useEffect, useState } from "react";
import { createStage } from "../Utils/gameHelper";

export const useStage = function (player, resetPlayer) {

  const [stage, setStage] = useState(createStage());
  const [clearedRows, setclearedRows] = useState(0)

  useEffect(
    function () {

      setclearedRows(0)
      const deleteclearedRows = function (prev) {
        // we will traverse all stage after each collision by looking all lines that are full Merge
        return prev.reduce((ack, row) => {
          if (row.findIndex((cell) => cell[0] === 0) === -1) {
            setclearedRows(prev => prev + 1)
            ack.unshift(new Array(prev[0].length).fill([0, "clear"]))
            return ack
          }
          ack.push(row)
          return ack
        }, [])

      };

      const updateStage = function (prevStage) {
        // flush the state
        const newState = prevStage.map((row, x) => row.map((cell, y) => (cell[1] === "clear" ? [0, "clear"] : cell))
        );

        // update the stage now
        player.tectromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              // console.log("cell", player.position.y);
              newState[y + player.position.y][x + player.position.x] = [
                value,
                `${player.collided ? "merge" : "clear"}`,
              ];
            }
          });
        });

        // check if we collided
        if (player.collided) {
          resetPlayer();
          return deleteclearedRows(newState)

        }

        return newState;
      };
      setStage((prev) => updateStage(prev));
    },
    [
      player,
      player.collided,
      player.position.x,
      player.position.y,
      player.tectromino,
      resetPlayer,
    ]
  );
  console.log("clearedRows", clearedRows)

  return { stage, setStage, clearedRows, setclearedRows };
};
