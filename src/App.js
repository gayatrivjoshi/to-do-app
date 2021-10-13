import React from "react";
import "./App.css";
import Board from "./Components/Board/Board";

function App() {
  return (
    <div className="App">
      <nav className="app_navbar">
        <h2>To Do List</h2>
      </nav>
      <div className="app_outers">
        <div className="app_boards">
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
