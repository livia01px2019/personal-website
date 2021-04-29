import React from 'react';
import './index.css';

export default class Skills extends React.Component {
  
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
              my skills</h3> 
        </div>
      )
    }
  }