import React from "react";
import { Fade } from "react-slideshow-image";
import img01 from "./images/01.jpg";
import img02 from "./images/02.jpg";
import img03 from "./images/03.jpg";
import img04 from "./images/04.jpg";
import img05 from "./images/05.jpg";
import img06 from "./images/06.jpg";
import img07 from "./images/07.jpg";
import img08 from "./images/08.jpg";
import img09 from "./images/09.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";

const fadeImages = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 5000,
  infinite: true,
  indicators: false,
  canSwipe: false,
  arrows: false,
};

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {fadeImages.map((e) => {
          return (
            <div className="each-fade">
              <div className="image-container">
                <img src={e} height="40%" width="40%" />
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
