import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/home/HomePage";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
    <ReduxProvider store={store}>
        <HomePage />
    </ReduxProvider>,
    document.getElementById("root")
);
