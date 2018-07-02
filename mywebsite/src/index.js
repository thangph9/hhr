import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import { Modal,AlertTop,AlertBottom } from "./ImagePage";
import App from "./App/App";
render(
    <Provider store={store} > 
        <div>
        <App />
        <Modal />
        <AlertTop />
        <AlertBottom />
        </div>
    </Provider>,
    document.getElementById("root")
);
