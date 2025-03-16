import React, { useEffect, useState } from "react";

export const TicTacToe = () => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [matValues, setMatValues] = useState(initialBoard);

  const [winnerMsg, setWinnerMsg] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const debouncedFunc = (func, delay) => {
    let timerId;
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func();
    }, delay);
  };

  const checkWinner = (row, col, mat = []) => {
    let success = false;

    // for row check winner
    for (let i = 0; i < 3; i++) {
      let selector = mat[row][0];
      if (mat[row][i] !== selector) {
        success = false;
        break;
      } else success = true;
    }

    // console.log(row, col);

    if (success) {
      setWinnerMsg(`Row Winner ${currentPlayer}`);
      return;
    }

    // for col check winner
    for (let i = 0; i < 3; i++) {
      let selector = mat[0][col];
      if (mat[i][col] !== selector) {
        success = false;
        break;
      } else success = true;
    }

    if (success) {
      setWinnerMsg(`Col Winner ${currentPlayer}`);
      return;
    }

    // for daigonal check winner
    for (let i = 0; i < 3; i++) {
      let selector = mat[1][1];
      if (selector) {
        if (mat[i][i] !== selector) {
          success = false;
          break;
        } else success = true;
      }
    }

    if (success) {
      setWinnerMsg(`Diagonal Winner ${currentPlayer}`);
      return;
    }

    // for anti daigonal check winner
    for (let i = 0; i < 3; i++) {
      let selector = mat[1][1];
      if (selector) {
        if (mat[i][2 - i] !== selector) {
          success = false;
          break;
        } else success = true;
      }
    }

    if (success) {
      setWinnerMsg(`Anti Diagonal Winner ${currentPlayer}`);
      return;
    }
  };

  const handleCellClick = (row, cell) => {
    if (winnerMsg) {
      window.alert("Please reset to start new game!");
      return;
    }
    let cellValue = matValues[row][cell];

    if (!cellValue) {
      let clone = JSON.parse(JSON.stringify(matValues)); // deep cloned;
      clone[row][cell] = !cellValue ? currentPlayer : cellValue;
      setMatValues(clone);
      setCurrentPlayer((prev) => (prev === "X" ? "0" : "X"));
      setWinnerMsg("");

      checkWinner(row, cell, clone);
    }
  };

  const handleReset = () => {
    setMatValues(initialBoard);
    setWinnerMsg("");
    setCurrentPlayer("X");
  };

  return (
    <div className="tictac-container">
      <h1 className="winner-message">{winnerMsg}</h1>
      <h4>Current Player: {currentPlayer}</h4>
      <div className="tictac-mat">
        <div>
          {matValues[0].map((val, index) => (
            <div
              className="cell"
              key={`0_${index}`}
              onClick={() => handleCellClick(0, index)}
            >
              {val}
            </div>
          ))}
        </div>
        <div>
          {matValues[1].map((val, index) => (
            <div
              className="cell"
              key={`1_${index}`}
              onClick={() => handleCellClick(1, index)}
            >
              {val}
            </div>
          ))}
        </div>
        <div>
          {matValues[2].map((val, index) => (
            <div
              className="cell"
              key={`2_${index}`}
              onClick={() => handleCellClick(2, index)}
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
