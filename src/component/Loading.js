import React from "react";
import loadinGif from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>room data ...</h4>
      <img src={loadinGif} alt="" />
    </div>
  );
}
