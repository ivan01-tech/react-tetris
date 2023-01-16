import { useCallback, useState } from "react";
import { CELLS_PER_LIGN, checkCollisions } from "../Utils/gameHelper";
import { generateTectrominos, TECTROMINOS } from "../Utils/Tetrominos";

export const PlayerInitialState = {
  position: { x: 0, y: 0 },
  collided: false,
  tectromino: TECTROMINOS["J"].shape,
}

export const usePlayer = function () {

  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    collided: false,
    tectromino: TECTROMINOS.J.shape,
  });

  const rotateMatrix = (matrix, dir) => {
    // transpose the matrix
    const transP = matrix.map((_, ind) => matrix.map((col) => col[ind]))
    if (dir > 0)
      // reverse each row to get the rotate
      return transP.map((row) => row.reverse())
    else
      return transP.reverse()
  }

  function rotatePlayer(stage, dir) {

    const copyPlayer = JSON.parse(JSON.stringify(player))

    copyPlayer.tectromino = rotateMatrix(copyPlayer.tectromino, dir)

    const pos = copyPlayer.position.x
    let offset = 1

    while (checkCollisions(stage, player, { x: 0, y: 0 })) {

      copyPlayer.position.x += offset
      offset = -(offset + offset > 0 ? 1 : -1)
      if (offset > copyPlayer.tectromino.length) {
        rotateMatrix(copyPlayer.tectromino, -dir)
        copyPlayer.position.x = pos
        return
      }

    }

    setPlayer(copyPlayer)
  }

  const resetPlayer = useCallback(function () {
    setPlayer({
      position: { x: (CELLS_PER_LIGN / 2) - 2, y: 0 },
      collided: false,
      tectromino: generateTectrominos().shape,
    });
  }, [])

  const updatePlayerPos = function ({ x, y, collided }) {
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x + x), y: (prev.position.y + y) },
      collided
    }));
  };

  return { player, resetPlayer, updatePlayerPos, rotateMatrix, rotatePlayer };
};
