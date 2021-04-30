import React from 'react';
import './index.css';
import facebookImg from './images/facebook.png'
import osheeppsImg from './images/osheepps.png'
import brownImg from './images/brown.png'

export default class Experience extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        software: [
          {
            company: "facebook",
            role: "software engineering intern",
            img: facebookImg,
            description: "I am an incoming software engineering intern for Facebook for summer 2021.",
            date: "May 2021 - ",
            mainLink: "https://www.facebook.com/",
            links: [
              {
                name: "website",
                link: "https://www.facebook.com/",
              },
            ]
          },
          {
            company: "o!sheepps",
            role: "software engineering intern",
            img: osheeppsImg,
            description: "Sole engineer of the company website promoting new products ahead of product launch, obtaining 900+ page views in the first month. Refactored company website using Vue.js to improve code organization and extensibility, and initiated company website’s responsive design. Engineer Swagger APIs and maintain backend of the website and WeChat miniprograms using Java, Spring framework, and MySQL + Redis databases. ",
            date: "Sept - Dec 2020",
            mainLink: "https://www.o-sheepps.com/",
            links: [
              {
                name: "website",
                link: "https://www.o-sheepps.com/",
              },
            ]
          }
        ], 
        teaching: [
          {
            company: "brown university",
            role: "undergraduate teaching assistant",
            img: brownImg,
            description: "",
            date: "Sept - Dec 2020",
            mainLink: "https://www.brown.edu/",
            links: [
              {
                name: "website",
                link: "https://www.brown.edu/",
              },
            ]
          }
        ]
      }
    }
  
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
              my experience</h3> 
          <h4 className="experience-subtitle"
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>software engineering</h4>
          <div>
            {this.state.software.map((role, index) => (
              <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "top"}}>
                <img style={{width: "50px", height: "auto", marginRight: "20px", objectFit: "contain", objectPosition: "top"}} src={role.img}></img>
                <div>
                  <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h5 style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}><a href={role.mainLink}>
                      {role.company}</a> | {role.role}</h5>
                    <h5>{role.date}</h5>
                  </div>
                  <p style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle} className="new-line">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h4 className="experience-subtitle"
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>teaching</h4>
          <div>
            {this.state.teaching.map((role, index) => (
              <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "top"}}>
                <img style={{width: "50px", height: "auto", marginRight: "20px", objectFit: "contain", objectPosition: "top"}} src={role.img}></img>
                <div>
                  <h5 style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}><a href={role.mainLink}>{role.company}</a> | {role.role}</h5>
                  <p style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle} className="new-line">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }