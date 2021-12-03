import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Main from "./template/Main";
import Login from "./page/Login";

export default function BasicExample() {
    // console.log = console.warn = console.error = () => {};
    return (
        <Router>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/dashboard">
                <Main page="dashboard" />
            </Route>
        </Router >
    );
}