import { findByLabelText } from '@testing-library/dom';
import React from 'react';
import './index.css';
import {
  Link
} from "react-router-dom";

export default class Error extends React.Component {
  
    render() {
      return (
        <div style={{height: "calc(100vh - 400px)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h3 style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle} className="section-header">oops! can't find the page you were looking for.</h3> 
          <Link to="/" className="header-link"><p className="section-header">go back</p></Link>
        </div>
      )
    }
  }