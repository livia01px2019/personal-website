import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './About.js';
import Header from './Header.js';
import Error from './Error.js';
import dayBackground from './images/day-background.jpg';
import nightBackground from './images/night-background.jpg';

class App extends React.Component {

  dayBackground = {
    backgroundImage: `url(${dayBackground})`
  }
  nightBackground = {
    backgroundImage: `url(${nightBackground})`
  }

  dayCard = {
    backgroundColor: "white"
  }
  nightCard = {
    backgroundColor: "white"
  }

  constructor(props) {
    super(props);

    this.state = {
      dayMode: true
    };
    this.setDayMode = this.setDayMode.bind(this);
  }

  setDayMode(b) {
    this.setState({ dayMode: b })
  }
  
  render() {
    return (
      <Router>
        <div className="website" style={this.state.dayMode ? this.dayBackground : this.nightBackground}>
          <Header dayMode={this.state.dayMode} setDayMode={this.setDayMode}/>
          
          <div className="card" style={this.dayMode ? this.dayCard : this.nightCard}>
            hello
            <Switch>
              <Route exact path="/" component={About}></Route>
              <Route component={Error}></Route>
            </Switch>
          </div>
          
        </div>
      </Router>
      )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
