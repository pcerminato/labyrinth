import React from "react";
import Cell from "./styled";

/**
 * @id {Number} Cell id
 * @type {String} target, blocked, regular, start
 * @onMove {function} Event handler for on move
 */
export default ({ children, id, onMove, type = "regular" }) => {
  return <Cell className={type}>{children}</Cell>;
};
