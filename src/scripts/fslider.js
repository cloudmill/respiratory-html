import { createStore } from "redux";
import { FSLIDER_DURATION } from "./constants";
import Swiper, { Parallax } from "swiper";

const start = () => {
  const fsliders = document.querySelectorAll("[data-fslider]");

  fsliders.forEach((fslider) => {
    const count = fslider.dataset.fsliderCount;

    // state

    const ACTION = {
      PREV: "PREV",
      NEXT: "NEXT",
      HALF: "HALF",
      END: "END",
    };

    const initialState = {
      index: 0,
      animation: false,
    };

    const store = createStore(reducer);

    function reducer(state = initialState, { type }) {
      switch (type) {
        case ACTION.PREV:
          if (state.animation) return state;
          if (state.index - 1 < 0) return state;

          setTimeout(() => {
            store.dispatch({ type: ACTION.HALF });
          }, Math.ceil(FSLIDER_DURATION / 2));

          return {
            ...state,

            animation: {
              start: state.index,
              end: state.index - 1,
              part: "start",
            },
          };
        case ACTION.NEXT:
          if (state.animation) return state;
          if (state.index + 1 >= count) return state;

          setTimeout(() => {
            store.dispatch({ type: ACTION.HALF });
          }, Math.ceil(FSLIDER_DURATION / 2));

          return {
            ...state,

            animation: {
              start: state.index,
              end: state.index + 1,
              part: "start",
            },
          };
        case ACTION.HALF:
          if (!state.animation) return state;
          if (state.animation.part === "end") return state;

          setTimeout(() => {
            store.dispatch({ type: ACTION.END });
          }, Math.ceil(FSLIDER_DURATION / 2));

          return {
            ...state,

            animation: {
              ...state.animation,

              part: "end",
            },
          };
          break;
        case ACTION.END:
          if (!state.animation) return state;
          if (state.animation.part === "start") return state;

          return {
            ...state,

            index: state.animation.end,
            animation: false,
          };
          break;
      }
    }

    console.log(store.getState());
    store.subscribe(() => {
      console.log(store.getState());
    });

    // control

    const prevBtn = fslider.querySelector("[data-fslider-prev]");
    const nextBtn = fslider.querySelector("[data-fslider-next]");

    prevBtn.addEventListener("click", () =>
      store.dispatch({ type: ACTION.PREV })
    );
    nextBtn.addEventListener("click", () =>
      store.dispatch({ type: ACTION.NEXT })
    );

    prevBtn.disabled = true;

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        if (animation.part === "start") {
          prevBtn.disabled = false;
          nextBtn.disabled = false;

          if (animation.end === 0) {
            prevBtn.disabled = true;
          } else if (animation.end === count - 1) {
            nextBtn.disabled = true;
          }
        }
      }
    });

    // swiper

    const swiperEl = fslider.querySelector("[data-fslider-swiper]");
    const swiper = new Swiper(swiperEl, {
      speed: FSLIDER_DURATION,
      modules: [Parallax],
      parallax: true,
      allowTouchMove: false,
    });

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        swiper.slideTo(animation.end);
      }
    });

    // cur

    const cur = fslider.querySelector("[data-fslider-cur]");

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        if (animation.part === "end") {
          cur.textContent = animation.end + 1;
        }
      }
    });

    // fade

    const fade = fslider.querySelector("[data-fslider-fade]");

    const getClass = (mod) => `fslider__fade--${mod}`;
    const removeMods = (mods) =>
      mods.forEach((mod) => fade.classList.remove(getClass(mod)));

    store.subscribe(() => {
      const { index, animation } = store.getState();

      if (animation) {
        if (animation.part === "start") {
          removeMods(["in-up", "in-down", "out-up", "out-down"]);

          if (animation.start < animation.end) {
            fade.classList.add(getClass("out-up"));
          } else {
            fade.classList.add(getClass("out-down"));
          }
        } else {
          removeMods(["in-up", "in-down", "out-up", "out-down"]);

          if (animation.start < animation.end) {
            fade.classList.add(getClass("in-down"));
          } else {
            fade.classList.add(getClass("in-up"));
          }
        }
      }
    });
  });
};

export { start };
