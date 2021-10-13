import React from "react";
import "./Board.css";
import Card from "../Card/Card";
import { MoreHorizontal } from "react-feather";
// import DotLogo from "../../Icons/3dots.svg"

function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">To Do</p>
        <MoreHorizontal />
      </div>
      <div className="board_cards">
        <Card />
      </div>
    </div>
  );
}

export default Board;
