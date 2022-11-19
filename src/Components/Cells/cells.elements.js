import styled from "styled-components";

export const CellWrap = styled.div`
  background: rgba(${({ color }) => (color ? color : "345,67,112")}, 0.8);
  border: ${({ type }) => (type === 0 ? "0px solid " : "4px solid")};
  border-top-color: rgba(${({ color }) => color}, 0.1);
  border-bottom-color: rgba(${({ color }) => color}, 1);
  border-right-color: rgba(${({ color }) => color}, 1);
  border-left-color: rgba(${({ color }) => color}, 0.3);
`;
