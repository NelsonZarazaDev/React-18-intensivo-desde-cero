import { useRef } from "react";
import "./App.css";

function App() {
// useRef cumple la funcion de manipular el DOM es como usar js para seleccionar una etiqueta que ente caso se debe referenciar y a ese elemento se aplicaran los cambios que se le den ya sea cambiar una clase, un estilo etc...
  const colorRef = useRef(null);
  const cambiarColor = () => {
    colorRef.current.style = `width:500px`;
  };
  return (
    <>
      <div className="caja" ref={colorRef}>Hola mundo</div>
      <button onClick={cambiarColor}>Cambiar color</button>
    </>
  );
}

export default App;
