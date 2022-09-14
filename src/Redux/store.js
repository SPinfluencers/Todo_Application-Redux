import { legacy_createStore,combineReducers } from "redux";
import {reducer as TodoReducer} from "./TodoReducer/Todoreducer"
import {reducer as AuthReducer } from "./AuthReducer/AuthReducer";

const Rootreducer=combineReducers({
   TodoReducer,AuthReducer
})

export const store=legacy_createStore(Rootreducer)