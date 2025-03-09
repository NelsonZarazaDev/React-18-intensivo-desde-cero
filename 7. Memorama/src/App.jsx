import { useEffect, useState } from "react";
import "./App.css";
import Tablero from "./components/Tablero/Tablero";

const emojiList = [..."😈🔥🍆🍑🍼💦🥵🫦"];

function App() {
  const [memobloquesbarajados, setmemobloquesbarajados] = useState([]);

  const [animating, setAnimating] = useState(false);

  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);

  useEffect(() => {
    const barajadoEmojiList = barajarArray([...emojiList, ...emojiList]);
    setmemobloquesbarajados(
      barajadoEmojiList.map((emoji, index) => ({
        index: index,
        emoji,
        flipped: false,
      }))
    );
  }, []);

  const barajarArray = (a) => {
    for (let i = a.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    const MemoBlockinvertido = { ...memoBlock, flipped: true };
    let memobloquesbarajadosCopy = [...memobloquesbarajados];
    memobloquesbarajadosCopy.splice(memoBlock.index, 1, MemoBlockinvertido);
    setmemobloquesbarajados(memobloquesbarajadosCopy);
    if (selectedMemoBlock === null) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setSelectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        memobloquesbarajadosCopy.splice(memoBlock.index, 1, memoBlock);
        memobloquesbarajadosCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );
        setmemobloquesbarajados(memobloquesbarajadosCopy);
        setSelectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <>
      <Tablero
        memoBlocks={memobloquesbarajados}
        handleMemoClick={handleMemoClick}
        animating={animating}
      />
    </>
  );
}

export default App;
