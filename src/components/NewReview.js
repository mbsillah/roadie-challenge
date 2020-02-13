import React, { useEffect } from "react";
import { createPortal } from "react-dom";
// import { Formik } from Formik

const NewReview = props => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  console.log(modalRoot);
  console.log(el);

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <span>Basic Form</span>
      </div>
    </div>,
    el
  );
};

export default NewReview;
