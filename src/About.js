import React from 'react';
import './index.css';

import meImg from './images/lzhu17.jpg';

export default class About extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        courses: [
          "CSCI0300: Fundamentals of Computer Systems",
          "CSCI1710: Logic for Systems",
          "APMA1650: Statistical Inference I",
          "CSCI0320: Software Engineering",
          "CSCI0220: Discrete Structures and Probability",
          "MATH0520: Linear Algebra",
          "CSCI0190: Accelerated Intro to CS",
          "MATH0200: Intermediate Calculus",
          "ENGN0030: Introduction to Engineering"

        ],
        links: [
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/livia-zhu/"
          },
          {
            name: "github",
            link: "https://github.com/livia01px2019"
          },
          {
            name: "email",
            link: "mailto:livia.zhu@live.com"
          },
          {
            name: "resume",
            link: "https://drive.google.com/file/d/11xbtUp_Zu0DZP_JZSPqDmnkw-47u7C50/view?usp=sharing"
          }
        ]
      }
    }

    componentDidMount() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
      return (
        <div style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
          <h3 className="section-header">about me</h3> 
            <div className="about-me">
              <div className="about-me-left">
                <img className="my-picture" src={meImg}></img>
              </div>
              
              <div>
                <p className="my-description">Hi! My name is Livia and I'm a sophomore from Shanghai, China. I'm currently studying Computer Science at Brown University, graduating in December 2023. Currently, I am a summer software engineering intern at Facebook in the Cosco team. I'm interested in Software Development and Systems Programming. Outside of CS, I enjoy English Literature and education (I'm a three-time Undergradute Teaching Assistant at Brown)!</p>
                <p className="my-description">When I'm not studying or holding TA hours, I love to bake, sew, play tennis, and solve crosswords. I also solely listen to Broadway musicals or Taylor Swift.</p>
                <div className="about-me-links">
                  {this.state.links.map((link, index) => (
                    <a href={link.link}><i>{link.name}</i></a>
                  ))}
                </div>
                <h5 style={{marginTop: "1rem"}}>coursework</h5>
                <ul>
                  {this.state.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      )
    }
  }