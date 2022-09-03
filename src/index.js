import React from 'react';
import './index.css';
import {Provider} from "react-redux";
import App from "./App";
import * as ReactDOM from "react-dom";
import store from "./bll/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
