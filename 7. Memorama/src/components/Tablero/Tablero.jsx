import React from "react";
import MemoBlock from "../MemoBlock/MemoBlock";
import "./Tablero.css";

export default function Tablero({ memoBlocks, handleMemoClick, animating }) {
  return (
    <main className="board">
      {memoBlocks.map((item, index) => {
        return (
          <MemoBlock
            key={`${index}_${item.emoji}`}
            memoBlock={item}
            animating={animating}
            handleMemoClick={handleMemoClick}
          />
        );
      })}
    </main>
  );
}
