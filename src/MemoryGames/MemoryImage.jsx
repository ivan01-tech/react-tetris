import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/fond.jpg";
import img1 from "../assets/fond1.png";

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #333;
  border-radius: 4px;
  perspective: 750px;
  position: relative; /* 2 */
`;
const CardImage = styled.div`
  transform-style: preserve-3d;
  transition: all 1s;
  width: 100%;
  height: 100%;
  .flip {
    transform: rotateY(0.5turn);
  }

  .flip .face {
    backface-visibility: visible;
  }
  .flip .back {
    backface-visibility: hidden;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${({ src1 }) => src1});
  background-size: cover;

  .face {
    backface-visibility: hidden;
  }
  .back {
    backface-visibility: visible;
  }
`;

function MemoryImage() {
  const [state, setState] = useState("");
  const handleClick = function (e) {
    console.log(state);
    setState((prev) => (prev === "flip" ? "" : "flip"));
  };

  return (
    <ImageWrapper onClick={handleClick}>
      <CardImage className={state}>
        <Image src1={img1} className="back" />
        <Image className="face" src1={img} />
      </CardImage>
    </ImageWrapper>
  );
}

export default MemoryImage;
