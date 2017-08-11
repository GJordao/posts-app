// Redux
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// Reducers
import Reducers from "./../reducers";

const middleware = () => {
    return applyMiddleware(thunkMiddleware);
};

export default createStore(Reducers, middleware());
