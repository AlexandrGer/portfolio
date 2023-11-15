import React from "react";
import './Skills.css';
import html from '../../images/html5.svg';
import css from '../../images/css3.svg';
import express from '../../images/express.svg';
import figma from '../../images/figma.svg';
import git from '../../images/git.svg';
import javascript from '../../images/javascript.svg';
import mongo from '../../images/mongo.png';
import node from '../../images/nodejs.svg';
import photoshop from '../../images/photoshop.svg';
import react from '../../images/react.svg';
import webpack from '../../images/webpack.svg';


export const Skills = () => {
	return (
		<section className="skills">
			<h2 className="skills__title">const
				<span className="skills__span">
					{` mySkills `}
				</span>
				=
			</h2>
			<ul className="skills__container">
				<li className="skills__item">
					<span className="skills__tooltip">HTML5</span>
					<img src={html} alt="html5" className="skills__icon" title="HTML5" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">CSS3</span>
					<img src={css} alt="css3" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">JavaScript</span>
					<img src={javascript} alt="javascript" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">Webpack</span>
					<img src={webpack} alt="webpack" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">React.JS</span>
					<img src={react} alt="react" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">Node.JS</span>
					<img src={node} alt="nodejs" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">Express.JS</span>
					<img src={express} alt="expressjs" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">GitHub</span>
					<img src={git} alt="github" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">Figma</span>
					<img src={figma} alt="figma" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">Photoshop</span>
					<img src={photoshop} alt="photoshop" className="skills__icon" />
				</li>
				<li className="skills__item">
					<span className="skills__tooltip">MongoDB</span>
					<img src={mongo} alt="mongo" className="skills__icon" />
				</li>
			</ul>
		</section>
	)
}