import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./styles.css";
import LoginLayout from "./layouts/LoginLayout";
import AppLayout from "./layouts/AppLayout";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )}
    />
  );
};

const AppLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <AppLayout>
          <Component {...matchProps} />
        </AppLayout>
      )}
    />
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
            <LoginLayoutRoute path="/signin" component={LoginPage} />
            <AppLayoutRoute path="/home" component={HomePage} />
            <AppLayoutRoute path="/users" component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
