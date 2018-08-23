import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./Store/Store.js";
import "./index.css";
import App from "./components/App/App";
import fontawesome from "@fortawesome/fontawesome";
import fontawesomeFAS from "@fortawesome/fontawesome-free-solid";
import fontawesomeFAR from "@fortawesome/fontawesome-free-regular";
fontawesome.library.add(fontawesomeFAR, fontawesomeFAS);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
