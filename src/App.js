import './App.css';
import {Route,Switch} from "react-router";
import {LoginPage} from "./components/LoginPage/LoginPage";
import React from "react";
import {Redirect} from "react-router-dom";
import {pageDomain} from "./bll/config";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./bll/reducers/reducer";
import Cookies from 'js-cookie'

const PrivateRoute = ({ children }) => {
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

function App() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/test-hotel-liis-v2/login' exact>
                    <LoginPage />
                </Route>
                <Route path='/test-hotel-liis-v2/' exact>
                    <PrivateRoute >
                        {/*<HomePage />*/}
                    </PrivateRoute>
                </Route>
            </Switch>
        </ConnectedRouter >
    );
}

export default App;