import React from "react";
import ReactDOM from "react-dom/client";

import { DATA, Data } from "./data";
import { Slider } from "./Slider";

const getData = (series: HTMLElement): Data => {
  try {
    const dataString = series.dataset.data || "";
    const data: Data = JSON.parse(dataString);

    return data;
  } catch (error) {
    console.warn(error);

    // test
    series.dataset.data = JSON.stringify(DATA);

    return DATA;
  }
};

const startReact = (series: HTMLElement) => {
  const root = ReactDOM.createRoot(series);
  root.render(<Slider data={getData(series)} onLoad={() => {}} />);
};

const start = () => {
  const seriesAll = document.querySelectorAll<HTMLElement>(".js-series");
  seriesAll.forEach(startReact);
};

export { start };
