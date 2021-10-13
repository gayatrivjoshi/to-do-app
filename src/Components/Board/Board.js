import React from "react";
import "./Board.css";
import Card from "../Card/Card";

function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">To Do</p>
      </div>
      <div className="board_cards">
        <Card />
      </div>
    </div>
  );
}

export default Board;
