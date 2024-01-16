import React, { Component } from "react";
import "./styles.scss";

export class AlexText extends Component {
  static Alex = "ALEX".split("");
  static Figliolia = "FIGLIOLIA".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="alex-text">
        <h1 id="alex">
          {AlexText.Alex.map(letter => {
            return (
              <div className="text-letter" key={letter}>
                {letter}
              </div>
            );
          })}
        </h1>
        <h1 id="figliolia">
          {AlexText.Figliolia.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
      </div>
    );
  }
}
