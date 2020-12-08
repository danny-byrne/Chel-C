import React from "react";
import "./App.css";
import "react-slideshow-image/dist/styles.css";
import { ReactComponent as Lotus } from "./components/SVG/lotus1.svg";

import SlideShow from "./components/Slideshow";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <div id="name">Chelsea Anne Yoga</div>
          <div id="LotusLogo">
            <Lotus />
          </div>
        </header>

        <div id="slideshow">
          <SlideShow />
        </div>
      </div>
    </>
  );
}

export default App;
