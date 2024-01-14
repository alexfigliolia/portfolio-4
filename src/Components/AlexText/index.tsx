import React, { Component } from "react";
import { Letter } from "./Letter";
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
        <h1>
          {AlexText.Alex.map((letter, i) => {
            return (
              <Letter
                key={letter}
                delay={(AlexText.Alex.length - i + 1) * 50 + 200}
                letter={letter}
              />
            );
          })}
        </h1>
        <h1>
          {AlexText.Figliolia.map((letter, i) => {
            return (
              <Letter
                key={`${letter}-${i}`}
                delay={(AlexText.Figliolia.length - i + 1) * 50}
                letter={letter}
              />
            );
          })}
        </h1>
      </div>
    );
  }
}
