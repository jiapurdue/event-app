import React from "react";

// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import theme from "./theme/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import Home from "./pages/Home";
import Event from "./pages/Event";

const history = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/event" component={Event} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
