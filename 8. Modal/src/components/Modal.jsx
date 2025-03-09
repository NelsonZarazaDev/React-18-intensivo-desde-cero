import React from "react";
import logo from "../img/paypal_logo.png";
import "./Modal.css";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <section className="contenedor">
      <div className="sub-contenedor">
        <div className="contenido">
          <div>
            <img src={logo} width="48px" alt="" />
          </div>
          <div className="mensaje">
            <div className="title">
              <h3>Pago realizado con exito</h3>
              <div className="text">Gracias por su preferencia</div>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="btn-descargar">Descargar</button>
          <button className="btn-volver" onClick={onClose}>Volver</button>
        </div>
      </div>
    </section>
  );
}
