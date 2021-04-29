import React from 'react';
import './index.css';

import meImg from './images/lzhu17.jpg';

export default class About extends React.Component {
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>about me</h3> 
          <div className="about-me">
            <img className="my-picture" src={meImg}></img>
            <p style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}
              className="my-description">Hi! My name is Livia and I'm a sophomore CS student at Brown University. </p>
          </div>
        </div>
      )
    }
  }