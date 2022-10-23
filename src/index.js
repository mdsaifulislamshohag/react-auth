import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import stores from "./stores";
import App from "./App";

const render = Component => {
    return ReactDOM.render(
        <Provider {...stores}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
  };
  
  render(App);