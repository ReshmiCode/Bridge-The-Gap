import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage' ;
import Feed from './Feed' ;
import Profile from './Profile' ;
import QnA from './QnA' ;
import Opportunities from './Opportunities' ;
import ScrollToTop from './components/ScrollToTop' ;

function App() {
  return (
    <div>
      <Router>
        <main>
            <ScrollToTop>
                <Switch>
                    <Route path="/" exact>
                      <HomePage/>
                    </Route>
                    <Route path="/feed" exact>
                      <Feed/>
                    </Route>
                    <Route path="/profile" exact>
                      <Profile/>
                    </Route>
                    <Route path="/qna" exact>
                      <QnA/>
                    </Route>
                    <Route path="/opportunities" exact>
                      <Opportunities/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
              </ScrollToTop>
          </main>
      </Router>
    </div>
  );
}

export default App;
