import { combineReducers, createStore } from "redux";
import AuthReducer from "./auth";
import UserReducer from "./user";

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer
}))

export default store