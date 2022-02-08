import { INCREMENT, FETCH_DATA } from "../actions/actions";

const INITIAL_STATE = {
  count: 1,
  datas: [],
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FETCH_DATA:
      return {
        ...state,
        datas: action.payload,
      };

    default:
      return state;
  }
}
