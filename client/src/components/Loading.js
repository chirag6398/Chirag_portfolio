import React from "react";
import "../styles/loading.css";
export default function Loading() {
  return (
    <div className="loading__ext">
      <div className="col col1"></div>
      <div className="col col2"></div>
      <div className="col col3"></div>
      <div className="col col4"></div>
      <div className="col col5"></div>
      <div className="loading__centerLoader">
        <div className="loading__dot"></div>
        <div className="loading__1"></div>
        <div className="loading__2"></div>
        <div className="loading__3"></div>
      </div>
    </div>
  );
}
