import React from 'react';
import './index.css';
import zoomandenhanceImage from './images/zoom-and-enhance.png';
import timagotchiImage from './images/timagotchi.png';
import conserveImage from './images/conserve.jpg';
import hiImage from './images/hi-my-name-is.jpg';
import { Row } from 'react-bootstrap';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "hi, my name is...",
          src: hiImage,
          mainLink: "https://github.com/QiuhongAnnaWei/HiMyNameIs",
          links: [
            {
              name: "devpost",
              link: "https://devpost.com/software/hi-my-name-is",
            },
            {
              name: "source code", 
              link: "https://github.com/QiuhongAnnaWei/HiMyNameIs"
            }
          ],
          date: "Jan 2021",
          description: "Built an educational tool that gamifies learning to engage students through a virtual pet, animations, points and achievements, and leaderboards. Developed in collaboration with a team of 3 developers and educators from 2 underfunded local public schools. Designed in Adobe Illustrator, engineered using HTML/CSS/JavaScript, the Spark framework, Java, and SQL."
        },
        {
          title: "conServe",
          src: conserveImage,
          mainLink: "https://github.com/QiuhongAnnaWei/ConServe",
          links: [
            {
              name: "devpost",
              link: "https://devpost.com/software/conserve",
            },
            {
              name: "source code", 
              link: "https://github.com/QiuhongAnnaWei/ConServe"
            }
          ],
          date: "Jan 2021",
          description: "Built an educational tool that gamifies learning to engage students through a virtual pet, animations, points and achievements, and leaderboards. Developed in collaboration with a team of 3 developers and educators from 2 underfunded local public schools. Designed in Adobe Illustrator, engineered using HTML/CSS/JavaScript, the Spark framework, Java, and SQL."
        },
        {
          title: "zoom and enhance",
          src: zoomandenhanceImage,
          mainLink: "https://zoomandenhance.herokuapp.com/",
          links: [
            {
              name: "website",
              link: "https://zoomandenhance.herokuapp.com/",
            },
            {
              name: "source code", 
              link: "https://github.com/crown523/zoom_and_enhance"
            },
            {
              name: "devpost",
              link: "https://devpost.com/software/zoom-and-enhance-v6t3qy"
            }
          ],
          date: "Oct 2020",
          description: "Created web app for efficient notetaking during online classes using Vue.js, Bootstrap, Web Speech API, RAKE.js, and Heroku. Support embedding of streaming sites, multi-language speech-to-text, automatic highlighting, manual styling, and keyword extraction through NLP."
        },
        {
          title: "timagotchi",
          src: timagotchiImage,
          mainLink: "http://cs32-timagotchi.herokuapp.com/login",
          links: [
            {
              name: "website",
              link: "http://cs32-timagotchi.herokuapp.com/login",
            },
            {
              name: "source code", 
              link: "https://github.com/livia01px2019/timagotchi"
            }
          ],
          date: "Feb 2020 – May 2020",
          description: "Built an educational tool that gamifies learning to engage students through a virtual pet, animations, points and achievements, and leaderboards. Developed in collaboration with a team of 3 developers and educators from 2 underfunded local public schools. Designed in Adobe Illustrator, engineered using HTML/CSS/JavaScript, the Spark framework, Java, and SQL."
        },
      ]
    };
  }
  
    render() {
      return (
        <div>
          <h3 className="section-header" 
            style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
              my projects</h3> 
          
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {this.state.projects.map((project, index) => (
              <div className={this.props.dayMode ? "card" : "card bg-dark text-white"} style={{width: "25rem", margin: "10px"}} key={index}>
                <a href={project.mainLink}><img class="card-img-top" style={{height: "200px", objectFit: "contain"}} src={project.src} alt={project.title}></img></a>
                <div class="card-body">
                  <a href={project.mainLink}><h5 class="card-title">{project.title}</h5></a>
                  <p class="card-text">{project.description}</p>
                  <div className="projectButtons">
                    {project.links.map((link, linkIndex) => (
                      <a key="linkIndex" className="btn btn-info projectButton" href={link.link}><i>{link.name} </i></a> 
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }