import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start({
    onUnhandledRequest: "bypass",
  });
}
//this will kik off the getDogs query ahead just when entering the site(app) - needed in mobile apps
/* store.dispatch(api.endpoints.getDogs.initiate());
store.dispatch(api.endpoints.getServices.initiate());
store.dispatch(api.endpoints.getService.initiate("a098239|")); */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
