import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import ContactMe from './Views/ContactMe';
require('typeface-anonymous-pro');

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contactme'>
            <ContactMe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
