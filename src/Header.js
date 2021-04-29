import React from 'react';
import './index.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import sunImage from './images/sun.png';
import moonImage from './images/moon.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Header extends React.Component {
    dayBackground = {
      backgroundColor: "#DFFDFF"
    }
    nightBackground = {
      backgroundColor: "#64797A"
    }

    render() {
      return (
        <Navbar style={this.props.dayMode ? this.dayBackground : this.nightBackground} expand="md" sticky="top" id="nav">
                <Navbar.Brand className="header-left">
                <img 
                  onClick={() => {this.props.setDayMode(!this.props.dayMode)}}
                  src={this.props.dayMode ? sunImage : moonImage}
                  alt="picture of sun"
                  className="logo" />
                  <h1 className="header-brand" style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>LIVIA ZHU</h1>
               </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                      <Link to="/personal-website" className="header-link" style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>ABOUT</Link>
                      <Link to="/projects" className="header-link" style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>PROJECTS</Link>
                      <Link to="/experience" className="header-link" style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>EXPERIENCE</Link>
                      <Link to="/skills" className="header-link" style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>SKILLS</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      )
    }
  }