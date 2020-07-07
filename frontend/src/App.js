import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import LogIn from "./components/auth/login";

import Balance from "./components/geninfo/balance";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/" render={() => <Redirect to="/balance" />} />
          <Route exact path="/balance" component={Balance} />
        </div>
      </Provider>
    );
  }
}

export default App;
