import React, { Component } from "react";
import "./styles.scss";

export class ContactText extends Component {
  static contact = "CONTACT".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="contact-text">
        <h1 id="contactText">
          {ContactText.contact.map((letter, i) => {
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
