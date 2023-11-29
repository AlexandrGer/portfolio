import React from "react";
import './Project.css';

export const Project = ({ image, title, description, websiteUrl, githubUrl, githubIcon, project }) => {
	return (
		<li className="project">
			<img src={image} alt={title} className="project__image" />
			<div className="project__wrapper">
				<a href={githubUrl} className="project__link" target="_blank">
					<img src={githubIcon} alt="GitHub" className="project__link-img" />
				</a>
				<a href={websiteUrl} className="project__title" target="_blank">{title}</a>
				<p className="project__description">{description}</p>
				<ul className="project__skills">
					{project.skillIcons.map((skillIcon) => {
						return (
							<li className="project__skill" key={skillIcon.name}>
								<img src={skillIcon.icon} alt={skillIcon.name} className="project__skill-img" />
							</li>
						)
					})}
				</ul>
			</div>
		</li>
	)
}