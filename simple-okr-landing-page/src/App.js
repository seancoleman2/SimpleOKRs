import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy';
import Pricing from './Pricing';
import UsageTutorial from './UsageTutorial';
import Support from './Support';


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className= "App-top">
            <Link className="App-name" to={'/'}> Simple OKRs </Link>
          </div>
          <div className="App-main">
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/usage' component={UsageTutorial} />
              <Route exact path = '/pricing' component={Pricing} />
              <Route exact path = '/support' component={Support} />
              <Route exact path = '/privacy-policy' component={PrivacyPolicy} />
            </Switch>
          </div>
        </div>
        <footer>
          <div className="footer">
            <Link className="footer-link" to={'/usage'}>Usage</Link>
            <Link className="footer-link" to={'/pricing'}>Pricing</Link>
            <Link className="footer-link" to={'/support'}>Support</Link> 
            <Link className="footer-link" to={'/privacy-policy'}>Privacy Policy</Link>
          </div>
        </footer>
      </Router>
    )
  }
}

export default App;