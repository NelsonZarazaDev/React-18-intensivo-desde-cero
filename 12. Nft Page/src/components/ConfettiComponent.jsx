import Confetti from "react-confetti";
import React from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function ConfettiComponent() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      numberOfPieces={180}
      gravity={0.03}
      width={width}
      height={height}
    />
  );
}
