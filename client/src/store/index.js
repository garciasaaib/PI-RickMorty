// CREATE STORE
import {createStore, applyMiddleware} from "redux";

// ASYNC CALLS IN REDUX
import thunk from "redux-thunk";

// FUNCTIONS IN STORE
import reducer from "./reducers";

// STORE IN BROWSER
import { composeWithDevTools } from 'redux-devtools-extension';

// STORE & FUNCTIONS
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;