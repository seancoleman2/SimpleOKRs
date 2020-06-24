import React, { Component } from 'react';
import './App.css';

class UsageTutorial extends Component {
    render() {
      return (
        <div >
          <h1> Usage </h1>
          <div> 
            <div className="summary">
              <p className="summary-header">Summary</p>
              <ul>
                <li> Add a new OKR - <code className="code"> /okr add </code></li>
                <li> View, manage, and share your OKRs - <code className="code"> /okr list </code></li>
                <li> See a tutorial at any time - <code className="code"> /okr help </code> </li>
                <li> Simple OKRs will remind you to check-in on your OKRs every two weeks</li>  
              </ul>
            </div>
            <h3>Adding a new OKR</h3>
            <p>You can add new OKRs by typing <code className="code"> /okr add </code> in any channel. </p>
            <div className="gif-container">
              <img className="gif" src="https://media.giphy.com/media/TKRRg2oxt83cZ3dBZQ/giphy.gif"></img>
            </div>
            <h3>Viewing, managing, and sharing your OKRs</h3>
              <p>You can view, manage, and share your OKRs by first typing <code className="code"> /okr list </code> in any channel. The OKRs will only be visible by you, unless you choose to share them to a channel or teammate.</p>
              <p> After listing, the ••• button enabled you to:</p>
              <ol>
                <li> Report OKR Progress</li>
                <li> View OKR Progress</li>
                <li> Share an OKR to a channel or team member</li>
                <li> Archive an OKR</li>
              </ol>
              <div className="gif-container">
                <img className="gif" src="https://media.giphy.com/media/ViOIBcqXdbTtyILgzs/giphy.gif"></img>
              </div>
            <h3>Keeping you on track</h3>
            <p> You will hear from Simple OKRs every couple of weeks to remind you to report progress on your OKRs. With progress reports, you will be able to track your progress and achieve your goals!</p>
          </div>
        </div>
      )
    }
}

export default UsageTutorial;