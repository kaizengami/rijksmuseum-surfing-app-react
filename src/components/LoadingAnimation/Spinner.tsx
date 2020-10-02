import "./Spinner.scss";
import React from "react";

function Dots() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
