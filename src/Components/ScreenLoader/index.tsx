import React, { Component } from "react";
import { Loader } from "Components/Loader";
import "./styles.scss";

export class ScreenLoader extends Component {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="screen-loader">
        <Loader />
      </div>
    );
  }
}
