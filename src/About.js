import React from 'react';
import './index.css';

import meImg from './images/lzhu17.jpg';

export default class About extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
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
                <img className="my-picture" src={meImg} alt="me"></img>
              </div>
              
              <div>
                <p className="my-description">Hi! My name is Livia and I'm a sophomore from Shanghai, China and Seattle, WA. I'm currently studying Computer Science at Brown University, graduating in December 2023. I'm interested in Computer Systems, particularly Distributed Systems, Cloud Computing, and Programming Languages and enjoy research-adjacent software engineering. Outside of CS, I enjoy English Literature and education (I'm a five-time Teaching Assistant at Brown)!</p>
                <p className="my-description">When I'm not studying or holding TA hours, I love to bake, sew, play tennis, and solve crosswords. I also solely listen to Broadway musicals or Taylor Swift.</p>
                <div className="about-me-links">
                  {this.state.links.map((link, index) => (
                    <a href={link.link}><i>{link.name}</i></a>
                  ))}
                </div>
              </div>
            </div>
        </div>
      )
    }
  }