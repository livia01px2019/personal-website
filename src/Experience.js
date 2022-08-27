import React from 'react';
import './index.css';
import googleImg from './images/google.png'
import facebookImg from './images/facebook.png'
import osheeppsImg from './images/osheepps.png'
import brownImg from './images/brown.png'
import roborockImg from './images/roborock.png'
import developImg from './images/develop.png'

export default class Experience extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        software: [
          {
            company: "google",
            role: "software engineering intern",
            img: googleImg,
            description: "Developed and optimized a sorted shuffle writer flush feature in Java for Cosco, a distributed shuffle service that supports Apache Spark.\nFlush >400TB per day directly from writers, reducing memory allocation blocking time of skewed or slow stages that trigger the feature by over 84% and reducing total runtime of those stages by up to 27%.",
            date: "jun - aug 2022",
            mainLink: "https://www.google.com/",
            links: [
            ]
          },
          {
            company: "facebook",
            role: "software engineering intern",
            img: facebookImg,
            description: "Developed and optimized a sorted shuffle writer flush feature in Java for Cosco, a distributed shuffle service that supports Apache Spark.\nFlush >400TB per day directly from writers, reducing memory allocation blocking time of skewed or slow stages that trigger the feature by over 84% and reducing total runtime of those stages by up to 27%.",
            date: "may - aug 2021",
            mainLink: "https://www.facebook.com/",
            links: []
          },
          {
            company: "o!sheepps",
            role: "software engineering intern",
            img: osheeppsImg,
            description: "Sole engineer of the company website promoting new products ahead of product launch, obtaining 900+ page views in the first month. \nRefactored company website using Vue.js to improve code organization and extensibility, and initiated company website’s responsive design. \nEngineered Swagger APIs and maintain backend of the website and WeChat miniprograms using Java, Spring framework, and MySQL + Redis databases. ",
            date: "sept - dec 2020",
            mainLink: "https://www.o-sheepps.com/",
            links: [
            ]
          },
          {
            company: "roborock",
            role: "robotics software development intern ",
            img: roborockImg,
            description: "Devised Simultaneous Localization and Mapping (SLAM) algorithms in C++ for robot vacuums to test software integration with new hardware. \nOptimized an Adaptive Monte Carlo Localization-based SLAM algorithm to run in real-time on robot vacuums with sensor updates every 200ms.\nConverted and optimized programs from Python to C++, improving time performance by over 99%.",
            date: "may - aug 2020",
            mainLink: "https://us.roborock.com/",
            links: [
            ]
          },
          {
            company: "develop for good",
            role: "product manager and software engineering volunteer",
            img: developImg,
            description: "Liaised between developers and CARE Live Well, a Zambian healthcare nonprofit, to publicize their social impact to potential investors on their website. \nManaged 5 software engineers to conduct user testing, modernize the front-end and create a backend that is easily updatable by the client in AWS. \nPlan project lifecycle, transform client requests into technical requirements, conduct focus groups, prototype pages in Figma and develop using React.js.",
            date: "sept 2020 - apr 2021",
            mainLink: "https://www.developforgood.org/",
            links: [],
          }
        ], 
        teaching: [
          {
            company: "brown university",
            role: "head teaching assistant: cs0300",
            img: brownImg,
            description: "Led a staff of 10 undergraduate TAs, spearheaded course development to create and improve assignments and labs covering memory management, operating systems basics, synchronization, and sharding in C, C++, and Rust.",
            date: "dec 2021 - may 2022",
            mainLink: "http://cs.brown.edu/courses/csci0300/2022/",
            links: []
          },
          {
            company: "brown university",
            role: "undergraduate teaching assistant",
            img: brownImg,
            description: "Design/lead labs and workshops, hold TA hours, answer questions online, and grade assignments.\n\nCSCI1730 - Programming Languages (Fall 2022) \n\nCSCI0190 - Accelerated Intro to CS (Fall 2021) \n\nCSCI0320 - Software Engineering (Spring 2021): \nClass of 210 students taught in Java and various technologies such as React.js. Mentored 3 final project groups.\n\nCSCI0190 - Accelerated Intro to CS (Fall 2020): \nFunctional programming class of 120 students taught in Pyret. Mentored 8 students and promoted gender diversity through mixers.",
            date: "sept 2020 - now",
            mainLink: "https://www.brown.edu/",
            links: [
              {
                name: "cs1730",
                link: "http://cs.brown.edu/courses/cs173/",
              },
              {
                name: "cs0190",
                link: "http://cs.brown.edu/courses/csci0190/",
              },
              {
                name: "cs0320",
                link: "http://cs.brown.edu/courses/csci0320/",
              },
            ]
          },
          {
            company: "ignitecs and community corps",
            role: "tutor",
            img: brownImg,
            description: "Developed and executed lessons in HTML/CSS/JavaScript and basic programming concepts to middle and elementary school students. \nCreated and executed weekly extracurricular lesson plans in topics from geography to cell biology for a group of 15 elementary schoolers. \nTutored at a local underfunded high school for weekly drop-in math and science homework.",
            date: "sept 2019 - dec 2020",
            mainLink: "https://www.brown.edu/academics/college/swearer/community-corps-partners-and-student-groups",
            links: [
            ]
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
          <h3 className="section-header" >
              my experience</h3> 
          <h4 className="experience-subtitle">software engineering</h4>
          <div>
            {this.state.software.map((role, index) => (
              <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "top"}}>
                <img style={{width: "50px", height: "50px", marginRight: "20px", objectFit: "contain", objectPosition: "top"}} src={role.img}></img>
                <div style={{width: "100%"}} >
                  <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <h5><a href={role.mainLink}>{role.company}</a> | {role.role}</h5>
                    <h5><i>{role.date}</i></h5>
                  </div>
                  <p className="new-line">{role.description}</p>
                  <p>
                  <div className="experience-links">
                    {role.links.map((link, index) => (
                      <a key={index} href={link.link}><i> {link.name} </i> </a>
                    ))}
                  </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h4 className="experience-subtitle">teaching</h4>
          <div>
            {this.state.teaching.map((role, index) => (
              <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "top"}}>
                <img style={{width: "50px", height: "50px", marginRight: "20px", objectFit: "contain", objectPosition: "top"}} src={role.img}></img>
                <div style={{width: "100%"}} >
                  <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <h5><a href={role.mainLink}>{role.company}</a> | {role.role}</h5>
                    <h5><i>{role.date}</i></h5>
                  </div>
                  <p className="new-line">{role.description}</p>
                  <p>
                  <div className="experience-links">
                    {role.links.map((link, index) => (
                      <a key={index} href={link.link}><i> {link.name} </i> </a>
                    ))}
                  </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }