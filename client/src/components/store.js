import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import rootreducers from "./redux/reducers/main";


const middleware = [thunk]; //array

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware)) //  ... is the spread operator
)

export default store;