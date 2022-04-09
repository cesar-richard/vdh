import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./pages/home";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Page404 from "./pages/404";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = true;
  }

  render() {
    return (
      <div className="App">
        <Router basename="/lavoieduhoublon">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
