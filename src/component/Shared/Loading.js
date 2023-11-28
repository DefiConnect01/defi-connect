import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 100 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="grow"
  
      />
    </div>
  );
}

export default Loading;