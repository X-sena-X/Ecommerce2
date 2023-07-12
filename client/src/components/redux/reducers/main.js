// here we compile all the reducers to a main file to ease use and carry the fuction from here

import { getProductsReducers } from "./Productsreducers";
import {combineReducers} from "redux";

// combinereducer to join the reducer
//getProductsdata is just the name of getproductsreducert

const rootreducers = combineReducers({
    getproductsdata:getProductsReducers
});

export default rootreducers;


