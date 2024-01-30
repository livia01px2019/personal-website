import React from 'react';
import './index.css';

import meImg from './images/lzhu17.jpg';

export default class Courses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			courses: [
				{
					semester: "fall '23",
					courses: [
						"csci1010: theory of computation",
						"csci1970: honors thesis independent study",
						"envs1400: sustainable design in the built environment",
					],
				},
				{
					semester: "spring '23",
					courses: [
						"csci1515: applied cryptography",
						"csci1670/1690: operating systems + os laboratory",
						"csci1970: honors thesis independent study",
						"hist1820b: environmental history of east asia",
					],
				},
				{
					semester: "fall '22",
					courses: [
						"csci1260: compilers",
						"csci1760: multiprocessor synchronization",
						"csci1973: advanced topics in computer systems",
						"engl0930: creative nonfiction",
					],
				},
				{
					semester: "spring '22",
					courses: [
						"csci1680: computer networks",
						"csci1380: distributed systems",
						"engl0711: literature and social mobility"
					],
				}, {
					semester: "fall '21",
					courses: [
						"csci2390: privacy-conscious computer systems research seminar",
						"csci1730: programming languages",
						"csci1470: deep learning",
						"rels0045: buddhism and death"
					],
				}, {
					semester: "spring '21",
					courses: [
						"csci0300: fundamentals of computer systems",
						"csci1710: logic for systems",
						"apma1650: statistical inference i",
						"soc0010: intro to sociology"
					],
				}, {
					semester: "spring '20",
					courses: [
						"csci0320: software engineering",
						"csci0220: discrete structures and probability",
						"math0520: linear algebra",
						"arch0680: water, culture, and power"
					]
				}, {
					semester: "fall '19",
					courses: [
						"csci0190: accelerated intro to cs",
						"math0200: intermediate calculus",
						"engn0030: introduction to engineering",
						"engl100F: devils, demons, and do-gooders"
					]
				}
			],
		}
	}

	componentDidMount() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	render() {
		return (
			<div style={this.props.dayMode ? this.props.dayTextStyle : this.props.nightTextStyle}>
				<h3 className="section-header">coursework</h3>
				{this.state.courses.map((sem, index) => (
					<div key={index}>
						<h6>{sem.semester}</h6>
						<ul>
							{sem.courses.map((course, cindex) => (
								<li key={cindex}><p>{course}</p></li>
							))}
						</ul>
					</div>
				))}
			</div>
		)
	}
}