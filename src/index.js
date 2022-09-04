import {HomePage} from "./components/HomePage/HomePage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import './index.css'
import './style/grid.css'
import './style/style.loader.css'
import ReactDOM from 'react-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import store from "./redux";
import {Provider} from "react-redux";
import {history} from "./redux/reducers";
import Cookies from "js-cookie";
import {Redirect} from "react-router";
import React from "react";
import {pageDomain} from "./config";

const PrivateRoute = ({children}) => {
    const tokenUser = Cookies.get('tokenUser')
    return (
        !!tokenUser
            ? children
            : <Redirect
                to={{
                    pathname: `${pageDomain}login`,
                }}
            ></Redirect>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/liis-test/login' exact>
                    <LoginPage/>
                </Route>
                <Route path='/liis-test/' exact>
                    <PrivateRoute>
                        <HomePage/>
                    </PrivateRoute>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);

