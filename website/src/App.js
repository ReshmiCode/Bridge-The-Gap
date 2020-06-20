import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage' ;
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
                    <Redirect to="/"/>
                </Switch>
              </ScrollToTop>
          </main>
      </Router>
    </div>
  );
}

export default App;
