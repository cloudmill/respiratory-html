import { DATA } from "./data";

import React from "react";
import ReactDOM from "react-dom/client";

import { Series } from "./Series";

export const start = () => {
  const seriesAll = document.querySelectorAll(".js-series");

  seriesAll.forEach((series) => {
    series.dataset.data = JSON.stringify(DATA);

    const root = ReactDOM.createRoot(series);
    root.render(<Series data={DATA} />);
  });
};
