import { DATA, Data } from "./data";

import React from "react";
import ReactDOM from "react-dom/client";

import { Slider } from "./Slider";

export const start = () => {
  const seriesAll = document.querySelectorAll(".js-series");

  seriesAll.forEach((series) => {
    if (!series.dataset.data) {
      series.dataset.data = JSON.stringify(DATA);
    }

    const data: Data = JSON.parse(series.dataset.data);

    const root = ReactDOM.createRoot(series);
    root.render(<Slider data={data} />);
  });
};
