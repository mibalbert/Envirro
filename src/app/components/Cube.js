"use client";

import React, { useState, useEffect } from "react";

function MySvgComponent() {
  // const [sliderValue, setSliderValue] = useState(200);

  // function handleSliderChange(event) {
  //   setSliderValue(event.target.value);
  // }

  // useEffect(() => {
  //   const svgElement = document.getElementById("my-svg");
  //   svgElement.setAttribute("width", sliderValue);
  // }, [sliderValue]);

  return (
    <div>
      {/* <input
        type="range"
        min="50"
        max="500"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <svg id="my-svg" width={sliderValue} height="100"></svg> */}
      {/* <svg viewBox="0 0 100 100" id="my-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width={sliderValue} height="50" fill="red" />
        <rect x="60" y="10" width="50" height="50" fill="green" />
        <polygon points="35,60 85,60 60,85 10,85" fill="blue" />
        <polygon points="35,60 60,35 110,35 85,60" fill="orange" />
        <polygon points="10,85 60,85 85,110 35,110" fill="yellow" />
        <polygon points="85,60 110,35 110,85" fill="purple" />
      </svg> */}
    </div>
  );
}

export default MySvgComponent;
