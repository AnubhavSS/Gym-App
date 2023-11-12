import React from "react";
import "./page.module.css";
const Loading = () => {
  return (
    <div className="loadCont">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
