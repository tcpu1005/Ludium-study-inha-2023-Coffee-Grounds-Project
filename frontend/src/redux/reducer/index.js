import { combineReducers } from "redux";


// ㅜ 리듀서들 가져오기
import default_reducer from "./default_reducer";
// ...


const roodReducer = combineReducers(
    {
        // 리듀서 담기
        default_reducer,
        // ...
    }
)


export default roodReducer;