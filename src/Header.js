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

    render() {
      const dayTextStyle = {
        color: "black"
      }
      const nightTextStyle = {
        color: "white"
      }

      return (
        <Navbar expand="lg" sticky="top" id="nav">
                <Navbar.Brand className="header-left">
                <img 
                  onClick={() => {this.props.setDayMode(!this.props.dayMode)}}
                  src={this.props.dayMode ? sunImage : moonImage}
                  alt="picture of sun"
                  className="logo" />
                  <h1 className="header-brand" style={this.props.dayMode ? dayTextStyle : nightTextStyle}>LIVIA ZHU</h1>
               </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                      <Link to="/" className="header-link" style={this.props.dayMode ? dayTextStyle : nightTextStyle}>ABOUT</Link>
                      <Link to="/" className="header-link" style={this.props.dayMode ? dayTextStyle : nightTextStyle}>PROJECTS</Link>
                      <Link to="/" className="header-link" style={this.props.dayMode ? dayTextStyle : nightTextStyle}>EXPERIENCE</Link>
                      <Link to="/" className="header-link" style={this.props.dayMode ? dayTextStyle : nightTextStyle}>SKILLS</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      )
    }
  }