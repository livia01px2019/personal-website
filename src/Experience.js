import React from 'react';
import './index.css';

export default class Experience extends React.Component {
  
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
              my experience</h3> 
        </div>
      )
    }
  }