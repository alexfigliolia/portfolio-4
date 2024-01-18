import React, { Component } from "react";
import { Page } from "Components/Page";
import { AlexText } from "Components/AlexText";
import { WorkButton } from "./WorkButton";
import "./styles.scss";

export default class Home extends Component<Record<string, never>> {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <Page name="home">
        <div>
          <AlexText />
          <WorkButton />
        </div>
      </Page>
    );
  }
}
