import { combineReducers } from "redux";


// ㅜ 리듀서들 가져오기
import default_reducer from "./default_reducer";
import collection_reducer from "./collection_reducer";
// ...


const roodReducer = combineReducers(
    {
        // 리듀서 담기
        default_reducer,
        collection_reducer,
        // ...
    }
)


export default roodReducer;