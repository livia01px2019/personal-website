import React from 'react';
import './index.css';
import zoomandenhanceImage from './images/zoom-and-enhance.png';
import timagotchiImage from './images/timagotchi.png';
import conserveImage from './images/conserve.jpg';
import hiImage from './images/hi-my-name-is.jpg';
import theseusImage from './images/theseus.png';
import musicImage from './images/music.png';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "theseus and the minotaur",
          src: theseusImage,
          mainLink: "https://github.com/rpaul48/theseus",
          links: [
            {
              name: "source code",
              link: "https://github.com/rpaul48/theseus",
            }
          ],
          date: "Mar - Apr 2021",
          description: "Created a model in collaboration with 3 other developers representing the Theseus and the Minotaur puzzle including board and move validity to evaluate strategies and generate interesting mazes and solutions. \n\nBuilt using Forge/Alloy with a Javascript visualizer for CS1710 Logic for Systems. "
        },
        {
          title: "music modeling",
          src: musicImage,
          mainLink: "https://github.com/livia01px2019/curiosity-modeling",
          links: [
            {
              name: "source code",
              link: "https://github.com/livia01px2019/curiosity-modeling",
            }
          ],
          date: "Feb 2021",
          description: "Modelled short musical compositions by through various musical heuristics on rhythm, note choice, and variation. \n\nCreated using the Forge/Alloy specification language for CS1710 Logic for Systems."
        },
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
          description: "Built a web app and RNN to generate unique names based on a name prefix, similar sounding name, and/or creativity level. Created with HTML/CSS/JS, Python, and Flask."
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
          description: "Developed an online tool that aims to reduce food waste by keeping track of groceries and generating recipes based on expiration dates. Designed in Adobe Illustrator and built using React.js and the RecipePuppy API. \n\n Winner of the 3rd Best Environmental Track Hack and Wolfram Award at HackDuke 2021."
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
          description: "Created web app for efficient notetaking during online classes using Vue.js, Bootstrap, Web Speech API, RAKE.js, and Heroku. \n\nSupports embedding of streaming sites, multi-language speech-to-text, automatic highlighting, manual styling, and keyword extraction through NLP. \n\n Finalist for the Best Professional Hack and Best Web-based Hack for the 2021 Hack@Home hackathon."
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
          description: "Built an educational tool that gamifies learning to engage students through a virtual pet, animations, points and achievements, and leaderboards. \n\nDeveloped in collaboration with a team of 3 developers and educators from 2 underfunded local public schools. \n\nDesigned in Adobe Illustrator, engineered using HTML/CSS/JavaScript, the Spark framework, Java, and SQL."
        },
      ]
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  render() {
    return (
      <div>
        <h3 className="section-header" 
          style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
            my projects</h3> 
        
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
          {this.state.projects.map((project, index) => (
            <div className={this.props.dayMode ? "card" : "card bg-dark text-white"} style={{width: "30rem", margin: "10px"}} key={index}>
              <a href={project.mainLink}><img class="card-img-top" style={{height: "200px", objectFit: "contain"}} src={project.src} alt={project.title}></img></a>
              <div class="card-body">
                <h5 class="card-title"><a href={project.mainLink}>{project.title}</a> | {project.date}</h5>
                <p class="card-text new-line">{project.description}</p>
                <div className="projectButtons">
                  {project.links.map((link, linkIndex) => (
                    <a key="linkIndex" className="projectButton" href={link.link}><p><i>{link.name} </i></p></a> 
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