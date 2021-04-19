import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            promise, 
            thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)