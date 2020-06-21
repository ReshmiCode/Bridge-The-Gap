import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import Feed from "./screens/Feed";
import Profile from "./screens/Profile";
import QnA from "./screens/QnA";
import Opportunities from "./screens/Opportunities";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <main>
          <NavBar />
          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/feed" exact>
                <Feed />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/qna" exact>
                <QnA />
              </Route>
              <Route path="/opportunities" exact>
                <Opportunities />
              </Route>
              <Redirect to="/" />
            </Switch>
          </ScrollToTop>
        </main>
      </Router>
    </div>
  );
}

export default App;
