import React, { Component } from 'react';
import './App.css';

class PrivacyPolicy extends Component {
    render() {
      return (
        <div>
          <h1> Privacy Policy </h1>
          <p> Last Updated: June 25th, 2020</p>
          <div> 
            <h3>Summary</h3>
            <p> Your privacy is important to us. It is Slash OKRs' policy to respect your privacy regarding any information we may collect from you across our website and Slack app.</p>
            <p> We only ask for personal information when we truly need it to provide a service to you. We also let you know why we're collecting it and how it will be used.</p>
            <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law or explicitly authorized by you.</p>
            <p> You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website and related services will be regarded as acceptance of our practices around privacy and personal information.</p>
            <h3> Data we collect and store </h3>
            <p> Slash OKRs collects basic user information about team members when the application is installed:</p>
            <ul>
              <li>Slack ID</li>
              <li>Name</li>
              <li>Email</li>
              <li>IP Addess</li>
            </ul>
            <p> Using standard web analytics and web server technologies, Slash OKRs system logs your navigation actions, IP address, cookies and other information provided by your web browser.</p>
            <p> Web connections to Slash OKRs services are encrypted via SSL, which means that all data on transit is encrypted</p>
            <h3> Questions </h3>
            <p>If you have questions or concerns about how your information is handled, please direct your inquiry to <a href = "mailto: smcoleman27@gmail.com">smcoleman27@gmail.com</a>.</p>
          </div>
        </div>
      )
    }
}

export default PrivacyPolicy;