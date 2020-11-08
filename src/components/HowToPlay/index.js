import React from "react";
import { cellStartColor, cellTargetColor } from "../../configs/constants";

export default () => (
  <div style={{ fontSize: 14 }}>
    <p>
      Go from <span style={{ color: cellStartColor }}>start</span> to{" "}
      <span style={{ color: cellTargetColor }}>target</span> using the keyboard
    </p>
    <ul>
      <li>A: left</li>
      <li>D: right</li>
      <li>W: up</li>
      <li>S: down</li>
    </ul>
  </div>
);
