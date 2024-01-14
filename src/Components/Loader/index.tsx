import React, { Component } from "react";
import "./styles.scss";

export class Loader extends Component {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="loader">
        <svg className="loader-star" version="1.1">
          <polygon
            points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
            fill="#fff"
          />
        </svg>
        <div className="loader-circles"></div>
      </div>
    );
  }
}
