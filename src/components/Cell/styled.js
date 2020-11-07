import styled from "styled-components";
import {
  cellSize,
  cellBlockedColor,
  cellRegularColor,
  cellStartColor,
  cellTargetColor,
} from "../../configs/constants";

export default styled.div`
  border: solid black 1px;
  width: ${cellSize}px;
  height: ${cellSize}px;
  background-color: ${cellRegularColor};
  border-radius: 3px;

  &.blocked {
    background-color: ${cellBlockedColor};
  }

  &.regular {
    background-color: ${cellRegularColor};
  }

  &.start {
    background-color: ${cellStartColor};
  }

  &.target {
    background-color: ${cellTargetColor};
  }
`;
