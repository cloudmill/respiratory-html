import Swiper, { Parallax } from "swiper";
import { createStore, applyMiddleware, Reducer } from "redux";
import thunk from "redux-thunk";
import { FSLIDER_DURATION } from "./constants";

type Animation = false | { start: number; end: number; part: "left" | "right" };

interface State {
  index: number;
  animation: Animation;
}

enum ActionType {
  prev,
  next,
  half,
  end,
}

interface Action {
  type: ActionType;
  payload?: any;
}

const prev = (): Action => ({
  type: ActionType.prev,
});
const next = (): Action => ({
  type: ActionType.next,
});
const half = (): Action => ({
  type: ActionType.half,
});
const end = (): Action => ({
  type: ActionType.end,
});

const animationPrev = () => (dispatch, getState) => {
  const { animation } = getState();

  if (!animation) {
    dispatch(prev());

    setTimeout(() => {
      dispatch(half());

      setTimeout(() => {
        dispatch(end());
      }, Math.ceil(FSLIDER_DURATION));
    }, Math.ceil(FSLIDER_DURATION));
  }
};
const animationNext = () => (dispatch, getState) => {
  const { animation } = getState();

  if (!animation) {
    dispatch(next());

    setTimeout(() => {
      dispatch(half());

      setTimeout(() => {
        dispatch(end());
      }, Math.ceil(FSLIDER_DURATION));
    }, Math.ceil(FSLIDER_DURATION));
  }
};

const initialState: State = {
  index: 0,
  animation: false,
};

const count = 12;

const reducer: Reducer<State, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionType.prev:
      if (!state.animation) {
        if (state.index - 1 >= 0)
          return {
            ...state,

            animation: {
              start: state.index,
              end: state.index - 1,
              part: "left",
            },
          };
        return state;
      }
      return state;
    case ActionType.next:
      if (!state.animation) {
        if (state.index + 1 < count)
          return {
            ...state,

            animation: {
              start: state.index,
              end: state.index + 1,
              part: "left",
            },
          };
        return state;
      }
      return state;
    case ActionType.half:
      if (state.animation)
        return {
          ...state,

          animation: {
            ...state.animation,

            part: "right",
          },
        };
      return state;
    case ActionType.end:
      if (state.animation)
        return {
          ...state,

          index: state.animation.end,
          animation: false,
        };
      return state;
    default:
      return state;
  }
};

const start = () => {
  const count = 12;

  const fslider = document.querySelector<HTMLElement>("[data-fslider]");

  const store = createStore(reducer, applyMiddleware(thunk));

  const prevBtn = document.querySelector("[data-fslider-prev]");
  const nextBtn = document.querySelector("[data-fslider-next]");

  prevBtn?.addEventListener("click", () => {
    store.dispatch(animationPrev());
  });
  nextBtn?.addEventListener("click", () => {
    store.dispatch(animationNext());
  });

  store.subscribe(() => {
    console.log(store.getState());
  });
};

export { start };
