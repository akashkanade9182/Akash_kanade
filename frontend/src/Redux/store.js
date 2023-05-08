import { legacy_createStore, applyMiddleware, compose,combineReducers} from "redux";
import {reducer as AppReducer} from "./AppReducer/reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(AppReducer,
    composeEnhancers(applyMiddleware(thunk))
    );
    export default store;



