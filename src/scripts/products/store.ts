import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

enum ActionType {
  CHANGE_SERIES,
}

interface Action {
  type: ActionType;
  payload: any;
}

const seriesReducer = (
  state = { series: 0, isChange: false },
  { type, payload }: Action | any
) => {
  switch (type) {
    case ActionType.CHANGE_SERIES:
      return {
        ...state,
        series: payload,
        isChange: payload !== state.series,
      };
      break;
    default:
      return state;
  }
};

export const changeSeries = (series) => ({
  type: ActionType.CHANGE_SERIES,
  payload: series,
});

// test
const changeSeriesAsync = (series) => (dispatch, getState) =>
  setTimeout(() => dispatch(changeSeries(series)), 1000);

const rootReducer = combineReducers({
  series: seriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
