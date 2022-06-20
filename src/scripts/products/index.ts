import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import thunk from "redux-thunk";

interface State {
  series: number;
}

enum ActionType {
  CHANGE_SERIES,
}

interface Action<PayloadType = any> {
  type: ActionType;
  payload: PayloadType;
}

const initialState: State = {
  series: 0,
};

const rootReducer: Reducer<State, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionType.CHANGE_SERIES:
      return {
        ...state,
        series: payload,
      };
      break;
    default:
      return {
        ...state,
      };
      break;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState().series);
