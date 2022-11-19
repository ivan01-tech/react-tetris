import styled from "styled-components";
import img from "../assets/fond.jpg";

export const TetrisWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${img});
  background-size: cover;
  overflow: hidden;
`;

export const TetrisRow = styled.div`
  padding: 40px;
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
`;
