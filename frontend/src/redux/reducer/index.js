import { combineReducers } from "redux";

// ㅜ 리듀서들 가져오기
import default_reducer from "./default_reducer";
import login_reducer from "./login_reducer";
// ...

const roodReducer = combineReducers({
  // 리듀서 담기
  default_reducer,
  login_reducer,
  // ...
});

export default roodReducer;
