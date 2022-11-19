import React, { useEffect, useState } from "react";
import styled from "styled-components";
const bird_width = 20;
const dropTime = 100;
const jumpheight = 10;
const jump = 50;
const gameWidth = 500;
const ObstacleW = 20;
const obT = 2;

const FlappyWrapper = styled.div`
  width: 100vw;
  height: ${({ gameWidth }) => gameWidth}px;
  background-color: #4888e9;
  position: relative;
  /* overflow: hidden; */
`;
const Bird = styled.div`
  transition: all 0.3s;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
`;

const Obtascle = styled.div`
  height: ${({ H }) => H}px;
  background-color: green;
  position: absolute;
  ${({ top }) => top && `top:${top}px;`}
  ${({ bottom }) => bottom && `bottom:${bottom}px;`} 
  ${({ right }) => `right:${right}px;`}
  ${({ width }) => width && `width:${width}px;`}
`;

const FlappyContent = styled.div``;

function FlappyBird() {
  const [startgame, setStartGame] = useState(false);
  const [Time, setTime] = useState(null);
  const [birdPos, setBirdPos] = useState(250);

  const [obstacleH, setObstacleH] = useState(Math.floor(Math.random() * 200));
  const [obstacleL, setObstacleL] = useState(0);
  const [obstacleTime, setObstacleTime] = useState(null);

  console.log(obstacleH);
  useEffect(() => {
    if (Time !== null) {
      const timer = setInterval(() => {
        console.log("first");
        setBirdPos((prev) => {
          if (prev + bird_width >= 500) setTime(null);
          return prev + bird_width >= gameWidth ? prev : prev + jumpheight;
        });
      }, Time);
      return () => {
        clearInterval(timer);
      };
    } else {
      return;
    }
  }, [Time]);

  useEffect(
    function () {
      if (obstacleTime) {
        const timer = setInterval(() => {
          console.log("first");
          setObstacleL((prev) => {
            if (prev > 500) {
              setObstacleH(Math.floor(Math.random() * 200));
              return 0;
            } else {
              return prev + 5;
            }
          });
        }, obstacleTime);
        return () => clearInterval(timer);
      }
    },
    [obstacleTime, obstacleL]
  );

  const handleClick = function () {
    setTime(dropTime);
    setObstacleTime(10);
  };

  const handleKeyDown = function (e) {
    if (e.keyCode === 32) setTime(null);
    setBirdPos((prev) => {
      return prev - jump >= 0 ? prev - jump : prev;
    });
  };

  return (
    <FlappyWrapper
      role="button"
      tabIndex={"0"}
      gameWidth={gameWidth}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleClick}
    >
      <FlappyContent>
        <Bird top={birdPos} width={bird_width} />
        <Obtascle width={ObstacleW} right={obstacleL} H={obstacleH} top="0" />
        <Obtascle
          width={ObstacleW}
          right={obstacleL}
          H={gameWidth - obstacleH - 100}
          bottom="0"
        />
      </FlappyContent>
    </FlappyWrapper>
  );
}

export default FlappyBird;
