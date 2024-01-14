import { Screen } from "State/Screen";
import ATLSmall from "Images/atl-small.jpg";
import ATLLarge from "Images/atl-large.jpg";
import CartaLarge from "Images/carta-large.jpg";
import CartaSmall from "Images/carta-small.jpg";
import WordCloudsSmall from "Images/wordClouds-small.png";
import WordCloudsLarge from "Images/wordClouds.png";
import SkedgeSmall from "Images/skedge-small.jpg";
import SkedgeLarge from "Images/skedge-desktop2.jpg";
import ReactSmall from "Images/react-small.jpg";
import ReactLarge from "Images/react-desktop2.jpg";
import SVSmall from "Images/sv-small.jpg";
import SVLarge from "Images/sv-large.jpg";
import CommerceSmall from "Images/gnocchi-small.jpg";
import CommerceLarge from "Images/gnocchi.jpg";
import EatSmall from "Images/republic-small.jpg";
import EatLarge from "Images/republic-large.jpg";

export class Preloader {
  public static initialize() {
    const loaded = [];
    const imgs =
      Screen.getState().width >= 670 ? this.largeImages : this.smallImages;
    for (let i = 0; i < imgs.length; i++) {
      const img = new Image();
      img.src = imgs[i];
      loaded[i] = img;
    }
  }

  private static readonly smallImages = [
    ATLSmall,
    CartaSmall,
    WordCloudsSmall,
    SkedgeSmall,
    ReactSmall,
    SVSmall,
    CommerceSmall,
    EatSmall,
  ];

  private static readonly largeImages = [
    ATLLarge,
    CartaLarge,
    WordCloudsLarge,
    SkedgeLarge,
    ReactLarge,
    SVLarge,
    CommerceLarge,
    EatLarge,
  ];
}
