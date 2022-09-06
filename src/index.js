import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './About.js';
import Header from './Header.js';
import Error from './Error.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Courses from './Courses.js';

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
    backgroundColor: "black"
  }

  dayTextStyle = {
    color: "black"
  }
  nightTextStyle = {
    color: "white"
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

  componentDidMount() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 7 || hours > 20) {
      this.setDayMode(false);
    } else {
      this.setDayMode(true);
    }
  }
  
  render() {
    return (
      <Router>
        <div className="website" style={this.state.dayMode ? this.dayBackground : this.nightBackground}>
          <Header 
            dayMode={this.state.dayMode} 
            setDayMode={this.setDayMode} 
            dayTextStyle={this.dayTextStyle}
            nightTextStyle={this.nightTextStyle}/>
          
          <div className="section" style={this.state.dayMode ? this.dayCard : this.nightCard}>
            <Switch>
              <Route exact path="/" component={
                (props) => (
                  <About {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
              <Route exact path="/" component={
                (props) => (
                  <About {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
              <Route exact path="/projects" component={
                (props) => (
                  <Projects {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
              <Route exact path="/experience" component={
                (props) => (
                  <Experience {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
              <Route exact path="/coursework" component={
                (props) => (
                  <Courses {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
              <Route component={
                (props) => (
                  <Error {...props} dayMode={this.state.dayMode} dayTextStyle={this.dayTextStyle}
                  nightTextStyle={this.nightTextStyle} />
                )}></Route>
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
