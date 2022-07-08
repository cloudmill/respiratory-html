import { getPx } from "./utils";
import debounce from "lodash.debounce";

const DEBOUNCE = 100;

const start = () => {
  const railsAll = document.querySelectorAll<HTMLElement>(".rails");

  railsAll.forEach((rails) => {
    const train = rails.querySelector<HTMLElement>(".rails__train");

    const getRailsY = () => rails.offsetTop;

    const updateTrain = () => {
      if (train) {
        train.style.top = getPx(getRailsY());
      }
    };

    const updateTrainDebounced = debounce(updateTrain, DEBOUNCE);

    updateTrainDebounced();
    addEventListener("load", () => updateTrainDebounced());
    addEventListener("resize", () => updateTrainDebounced());
  });
};

export { start };
