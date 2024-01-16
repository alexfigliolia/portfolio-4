import React, { Component } from "react";
import "./styles.scss";

export class Loader extends Component {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="loader">
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}
