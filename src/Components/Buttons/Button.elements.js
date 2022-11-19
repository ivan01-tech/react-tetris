import styled from "styled-components";

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 10px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${function (props) {
    return props.gameOver ? "red" : "#999";
  }};
  background-color: black;
  border: 3px solid #333;
  font-size: 0.8rem;
`;

export const StartButtonWrap = styled.button`
  margin: 0 0 20px 0;
  min-height: 20px;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border: none;
  color: white;
  background: #333;
  font-size: 1rem;
  cursor: pointer;
`;
