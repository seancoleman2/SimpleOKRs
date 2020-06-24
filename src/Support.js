import React, { Component } from 'react';
import UsageTutorial from './UsageTutorial';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

class Support extends Component {
    render() {
      return (
        <div>
          <h1> Support </h1>
          <p> For support or to report any bugs you may find, please reach out to <a href = "mailto: smcoleman27@gmail.com">smcoleman27@gmail.com</a>.</p>
          <p> For more information on how to use Simple OKRs, refer to the <Link className="in-line-link" to={'/usage'}>usage</Link> tutorial.</p>
        </div>
      )
    }
}

export default Support;