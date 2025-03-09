import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Modal
      </button>
      
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default App;
