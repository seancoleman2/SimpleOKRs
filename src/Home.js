import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import add from './assets/add.png';
import list from './assets/list.png';
import progress_reminder from './assets/progress-reminder.png'
import report_progress from './assets/report-progress.png';
import progress_over_time from './assets/progress-over-time.png';

class Home extends Component {
    render() {
      return (
        <div>
          <h1> A lightweight Slack app for OKR Management</h1>
          <p1> Drive OKR success in the place your team does work. </p1>
          <div className="slack-button">
            <a href="https://slack.com/oauth/v2/authorize?client_id=875210016705.885000441780&scope=calls:read,calls:write,channels:read,chat:write,commands,dnd:read,groups:read,im:history,im:read,im:write,mpim:history,mpim:read,mpim:write,remote_files:read,remote_files:share,remote_files:write,team:read,users:read,users:read.email,users:write&user_scope=chat:write">
              <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></img>
            </a>
          </div>
          <Carousel showArrows autoPlay infiniteLoop stopOnHover swipeable showStatus={false}>
            <div>
              <img src={add}/>
            </div>
            <div>
              <img src={list}/>
            </div>
            <div>
              <img src={progress_reminder}/>
            </div>
            <div>
              <img src={report_progress}/>
            </div>
            <div>
              <img src={progress_over_time}/>
            </div>
          </Carousel>
        </div>
      )
    }
}

export default Home;