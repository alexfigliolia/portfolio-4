import React, { Component } from "react";
import { Page } from "Components/Page";
import type { IScreen } from "Models/types";
import { Routing } from "State/Routing";
import "./styles.scss";

export default class HomeScreen extends Component<IScreen> {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    const { height, width } = this.props;
    return (
      <Page name="home">
        <div style={{ height, width }}>
          Home!{" "}
          <button onClick={() => Routing.changeRoute("#Work")}>Hello</button>
        </div>
      </Page>
    );
  }
}
