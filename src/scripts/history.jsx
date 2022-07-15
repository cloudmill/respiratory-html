import { update } from "lodash";
import { createStore } from "redux";
import { HISTORY_DURATION as DURATION } from "./constants";
import React from "react";
import ReactDOM from "react-dom/client";
import { Words } from "./components/Words";

const HALF_DURATION = Math.ceil(DURATION / 2);

const start = () => {
  const historyAll = document.querySelectorAll("[data-history]");

  historyAll.forEach((history) => {
    // tabs

    const tabAll = history.querySelectorAll("[data-history-tab]");

    const removeActiveTab = () =>
      tabAll.forEach((tab) => tab.classList.remove("tab--active"));
    const setActiveTab = (index) => tabAll[index].classList.add("tab--active");

    // data

    const initialIndex = [...tabAll].findIndex((tab) => {
      return tab.classList.contains("tab--active");
    });

    const count = tabAll.length;

    // state

    const ACTION = {
      CHANGE: "CHANGE",
      HALF: "HALF",
      END: "END",
      PREV: "PREV",
      NEXT: "NEXT",
    };

    const initialState = {
      index: initialIndex,
      animation: false,
    };

    const store = createStore(reducer);

    function reducer(state = initialState, { type, payload }) {
      switch (type) {
        case ACTION.CHANGE:
          if (!state.animation) {
            setTimeout(() => {
              store.dispatch({ type: ACTION.HALF });
            }, HALF_DURATION);

            return {
              ...state,

              animation: {
                start: state.index,
                end: payload,
                part: "start",
              },
            };
          }
          return state;
          break;
        case ACTION.HALF:
          if (state.animation && state.animation.part === "start") {
            setTimeout(() => {
              store.dispatch({ type: ACTION.END });
            }, HALF_DURATION);

            return {
              ...state,

              animation: {
                ...state.animation,

                part: "end",
              },
            };
          }
          return state;
          break;
        case ACTION.END:
          if (state.animation && state.animation.part === "end")
            return {
              ...state,

              index: state.animation.end,
              animation: false,
            };
          return state;
          break;
        case ACTION.PREV:
          if (!state.animation && state.index - 1 >= 0) {
            setTimeout(() => {
              store.dispatch({ type: ACTION.HALF });
            }, HALF_DURATION);

            return {
              ...state,

              animation: {
                start: state.index,
                end: state.index - 1,
                part: "start",
              },
            };
          }
          return state;
        case ACTION.NEXT:
          if (!state.animation && state.index + 1 < count) {
            setTimeout(() => {
              store.dispatch({ type: ACTION.HALF });
            }, HALF_DURATION);

            return {
              ...state,

              animation: {
                start: state.index,
                end: state.index + 1,
                part: "start",
              },
            };
          }
          return state;
        default:
          return state;
      }
    }

    // ui events

    tabAll.forEach((tab, index) =>
      tab.addEventListener("click", () =>
        store.dispatch({
          type: ACTION.CHANGE,
          payload: index,
        })
      )
    );

    // tabs update

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation && animation.part === "start") {
        removeActiveTab();
        setActiveTab(animation.end);
      }
    });

    // fade

    const fadeAll = history.querySelectorAll("[data-history-fade]");

    // update fade

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        const { start, end, part } = animation;

        if (part === "start") {
          fadeAll[start].classList.remove("history__fade-item--in");
          fadeAll[start].classList.add("history__fade-item--out");
        } else {
          fadeAll[start].classList.remove("history__fade-item--out");
          fadeAll[end].classList.add("history__fade-item--in");
        }
      }
    });

    // btns

    const prevBtn = history.querySelector("[data-history-prev]");
    const nextBtn = history.querySelector("[data-history-next]");

    // ui events

    prevBtn.addEventListener("click", () =>
      store.dispatch({ type: ACTION.PREV })
    );
    nextBtn.addEventListener("click", () =>
      store.dispatch({ type: ACTION.NEXT })
    );

    // update btns

    const updateBtns = (state) => {
      const { index, animation } = state;

      if (count === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
      }

      if (animation) {
        const { start, end, part } = animation;

        if (part === "start") {
          if (start === 0) {
            prevBtn.disabled = false;
          } else if (start === count - 1) {
            nextBtn.disabled = false;
          }

          if (end === 0) {
            prevBtn.disabled = true;
          } else if (end === count - 1) {
            nextBtn.disabled = true;
          }
        }
      } else {
        if (index === 0) {
          prevBtn.disabled = true;
        } else if (index === count - 1) {
          nextBtn.disabled = true;
        }
      }
    };

    updateBtns(store.getState());
    store.subscribe(() => updateBtns(store.getState()));

    // title && update title

    const title = history.querySelector("[data-history-title]");
    const titles = JSON.parse(title.dataset.historyTitle);

    const titleRoot = ReactDOM.createRoot(title);

    const getMoveFromAnimation = (animation) => {
      if (animation) {
        const { start, end, part } = animation;

        const toBottom = start < end;

        if (part === "start") {
          if (toBottom) {
            return "mid-up";
          } else {
            return "mid-down";
          }
        } else {
          if (toBottom) {
            return "down-mid";
          } else {
            return "up-mid";
          }
        }
      } else {
        return false;
      }
    };

    const MyWords = ({ animation, children }) => (
      <Words
        duration={HALF_DURATION}
        mods={["blue"]}
        move={getMoveFromAnimation(animation)}
      >
        {children}
      </Words>
    );

    const updateTitle = (state) => {
      const { index, animation } = store.getState();

      if (animation) {
        const { start, end, part } = animation;

        if (part === "start") {
          titleRoot.render(
            <MyWords animation={animation}>{titles[start]}</MyWords>
          );
        } else {
          titleRoot.render(
            <MyWords animation={animation}>{titles[end]}</MyWords>
          );
        }
      } else {
        titleRoot.render(
          <MyWords animation={animation}>{titles[index]}</MyWords>
        );
      }
    };

    updateTitle(store.getState());
    store.subscribe(() => updateTitle(store.getState()));
  });
};

export { start };
