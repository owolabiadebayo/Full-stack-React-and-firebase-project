import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/CombineReducer";
import { Provider } from "react-redux"; // connect the reducer to the store
import thunk from "redux-thunk"; //connect the redux to external api using thunk its a middleware
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import fbconfig from "./firebase config/fbconfig";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbconfig),
    // reactReduxFirebase(fbconfig)
  )
); // store enhancer thunk return a function and initially the firebase and fire store knows nothing about our project
// to add multiple store enhancer using compose

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
