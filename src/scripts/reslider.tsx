import Swiper, { Parallax } from "swiper";
import React from "react";
import ReactDOM from "react-dom/client";
import { Words, Move } from "./components/Words";
import { RESLIDER_DURATION as DURATION } from "./constants";
import { createStore, Reducer, Action } from "redux";
import { getClassFromMod } from "./utils";

const start = () => {
  const resliders = document.querySelectorAll<HTMLElement>(".reslider");

  resliders.forEach((reslider) => {
    // props
    const count = +(reslider.dataset.resliderCount || 0);

    // state
    type Animation =
      | false
      | [start: number, end: number, part: "left" | "right"];

    interface State {
      index: number;
      animation: Animation;
    }

    const initialState: State = {
      index: 0,
      animation: false,
    };

    enum ActionType {
      prev,
      next,
      end,
      half,
    }

    const prev = (): Action<ActionType> => ({
      type: ActionType.prev,
    });
    const next = (): Action<ActionType> => ({
      type: ActionType.next,
    });
    const end = (): Action<ActionType> => ({
      type: ActionType.end,
    });
    const half = (): Action<ActionType> => ({
      type: ActionType.half,
    });

    const reducer: Reducer<State, Action<ActionType>> = (
      state = initialState,
      action
    ) => {
      switch (action.type) {
        case ActionType.prev:
          if (state.animation) {
            return state;
          } else {
            if (state.index - 1 >= 0) {
              setTimeout(() => {
                store.dispatch(half());
              }, Math.round(DURATION / 2));

              setTimeout(() => {
                store.dispatch(end());
              }, DURATION);

              return {
                ...state,

                animation: [state.index, state.index - 1, "left"],
              };
            } else {
              return state;
            }
          }
        case ActionType.next:
          if (state.animation) {
            return state;
          } else {
            if (state.index + 1 < count) {
              setTimeout(() => {
                store.dispatch(half());
              }, Math.round(DURATION / 2));

              setTimeout(() => {
                store.dispatch(end());
              }, DURATION);

              return {
                ...state,

                animation: [state.index, state.index + 1, "left"],
              };
            } else {
              return state;
            }
          }
        case ActionType.half:
          return {
            ...state,

            animation: [state.animation[0], state.animation[1], "right"],
          };
        case ActionType.end:
          return {
            ...state,

            index: state.animation[1],
            animation: false,
          };
        default:
          return state;
      }
    };

    const store = createStore(reducer);

    // fade
    const fadesContainers = reslider.querySelectorAll(".reslider__fade");
    fadesContainers.forEach((fadesContainer) => {
      const fades = fadesContainer.querySelectorAll(".reslider__fade-item");

      const removeMod = (mod) => {
        fades.forEach((fade) =>
          fade.classList.remove(getClassFromMod("reslider__fade-item", mod))
        );
      };
      const addMod = (mod, index) => {
        fades[index].classList.add(getClassFromMod("reslider__fade-item", mod));
      };

      store.subscribe(() => {
        const { index, animation } = store.getState();

        if (animation) {
          const [start, end, part] = animation;

          if (part === "left") {
            addMod("out", start);
          } else {
            removeMod("active");
            removeMod("out");
            addMod("active", end);
            addMod("in", end);
          }
        } else {
          removeMod("active");
          removeMod("in");
          addMod("active", index);
        }
      });
    });

    // image
    const swiperEl = reslider.querySelector<HTMLElement>(".swiper");

    if (swiperEl) {
      const swiper = new Swiper(swiperEl, {
        modules: [Parallax],
        allowTouchMove: false,
        speed: DURATION,
        parallax: true,
      });

      store.subscribe(() => {
        const { animation } = store.getState();

        if (animation) {
          const [start, end, part] = animation;

          if (part === "left") {
            swiper.slideTo(end);
          }
        }
      });
    }

    // title
    const titleAll = reslider.querySelectorAll<HTMLElement>(
      "[data-reslider-title]"
    );

    titleAll.forEach((title) => {
      const titlesStr = title.dataset.resliderTitle || "[]";
      const titles = JSON.parse(titlesStr);

      const titleRoot = ReactDOM.createRoot(title);
      titleRoot.render(
        <Words duration={DURATION} move={false}>
          {titles[0]}
        </Words>
      );

      const getMoveFromAnimation = (animation: Animation): Move => {
        if (animation) {
          const start = animation[0];
          const end = animation[1];
          const part = animation[2];

          const toBottom = start < end;

          if (part === "left") {
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

      store.subscribe(() => {
        const { index, animation } = store.getState();

        titleRoot.render(
          <Words
            duration={Math.floor(DURATION / 2)}
            move={getMoveFromAnimation(animation)}
          >
            {(animation &&
              ((animation[2] === "left" && titles[animation[0]]) ||
                titles[animation[1]])) ||
              titles[index]}
          </Words>
        );
      });
    });

    // controls
    const prevBtnAll = reslider.querySelectorAll<HTMLButtonElement>(
      "[data-reslider-prev]"
    );
    const nextBtnAll = reslider.querySelectorAll<HTMLButtonElement>(
      "[data-reslider-next]"
    );

    if (prevBtnAll && nextBtnAll) {
      prevBtnAll.forEach((prevBtn) => (prevBtn.disabled = true));

      prevBtnAll.forEach((prevBtn) =>
        prevBtn.addEventListener("click", () => store.dispatch(prev()))
      );
      nextBtnAll.forEach((nextBtn) =>
        nextBtn.addEventListener("click", () => store.dispatch(next()))
      );

      store.subscribe(() => {
        const { index, animation } = store.getState();

        prevBtnAll.forEach((prevBtn) => (prevBtn.disabled = false));
        nextBtnAll.forEach((nextBtn) => (nextBtn.disabled = false));

        if (animation) {
          const end = animation[1];

          if (end === 0) {
            prevBtnAll.forEach((prevBtn) => (prevBtn.disabled = true));
          } else if (end === count - 1) {
            nextBtnAll.forEach((nextBtn) => (nextBtn.disabled = true));
          }
        } else {
          if (index === 0) {
            prevBtnAll.forEach((prevBtn) => (prevBtn.disabled = true));
          } else if (index === count - 1) {
            nextBtnAll.forEach((nextBtn) => (nextBtn.disabled = true));
          }
        }
      });
    }

    // cur

    const curAll = reslider.querySelectorAll("[data-reslider-cur]");

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        const [start, end, part] = animation;

        if (part === "right") {
          curAll.forEach((cur) => (cur.textContent = String(end + 1)));
        }
      }
    });

    // progress

    const progressAll = reslider.querySelectorAll("[data-reslider-progress]");

    const getClass = (mod) => `reslider__progress--${mod}`;
    const removeMods = (mods) =>
      mods.forEach((mod) =>
        progressAll.forEach((progress) =>
          progress.classList.remove(getClass(mod))
        )
      );

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        const [start, end, part] = animation;

        if (part === "left") {
          removeMods(["in-up", "in-down", "out-up", "out-down"]);

          if (start < end) {
            progressAll.forEach((progress) =>
              progress.classList.add(getClass("out-up"))
            );
          } else {
            progressAll.forEach((progress) =>
              progress.classList.add(getClass("out-down"))
            );
          }
        } else {
          removeMods(["in-up", "in-down", "out-up", "out-down"]);

          if (start < end) {
            progressAll.forEach((progress) =>
              progress.classList.add(getClass("in-down"))
            );
          } else {
            progressAll.forEach((progress) =>
              progress.classList.add(getClass("in-up"))
            );
          }
        }
      }
    });
  });
};

export { start };
