import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const initialState={
    Counter:0,
    todos:[]
}

export const store = legacy_createStore(reducer,initialState)