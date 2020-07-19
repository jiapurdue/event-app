import React from "react";

// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import theme from "./theme/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import Home from "./pages/Home";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail"
import Navbar from "./components/Navbar";

const history = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/event/:id"> <EventDetail /></Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
