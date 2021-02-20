import { combineReducers, createStore } from "redux";
import AuthReducer from "./auth";
import UserReducer from "./user";
import gejalaReducer from "./gejala";

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    InReducer: gejalaReducer,
}))



export default store;