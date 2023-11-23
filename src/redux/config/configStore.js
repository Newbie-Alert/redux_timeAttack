import { legacy_createStore as creatStore } from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "../modules/todos";


const rootReducer = combineReducers({ todoReducer })


export const store = creatStore(rootReducer);