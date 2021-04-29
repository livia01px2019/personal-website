import React from 'react';
import './index.css';

export default class Projects extends React.Component {
  
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
              my projects</h3> 
        </div>
      )
    }
  }