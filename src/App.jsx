import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Switch, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
