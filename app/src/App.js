import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Condition from "./pages/conditionGenerale";
import Billeterie from "./pages/billeterie";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Page404 from "./pages/404";

import auth from "./utils/auth";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = true;
  }

  componentDidMount() {
    console.log("loc:", window.location.search);
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("code")) {
      console.log("auth");
      auth.init();
    }
    // if (localStorage.getItem("isLoggedIn") === "true") {
    //   renewSession();
    // }
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
            <Route path="/conditions-generales">
              <Condition />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/billeterie">
              {auth.isAuthenticated ? <Billeterie /> : <Redirect to="/login" />}
            </Route>
            {/* <Route path="*">
            <HomePage />
          </Route> */}
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
