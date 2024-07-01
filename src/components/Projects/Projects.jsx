import React from "react";
import './Projects.css';
import { projectsList } from "../../utils/projects";
import { Project } from "../Project/Project";

export const Projects = () => {
	return (
		<section className="projects">
			<div className="projects__container">
				<h1 className="projects__title">Коллекция проектов</h1>
				<p className="projects__subtitle">В основном сдесь представлены проекты, которые были выполнены во время обучения в Яндекс.Практикуме.
					Но это лишь временно, эта коллекция обязательно будет  пополняться новыми проектами. </p>
				<ul className="projects__items">
					{projectsList.map((project) => {
						return (
							<Project
								key={project.id}
								image={project.image}
								title={project.title}
								description={project.description}
								websiteUrl={project.websiteUrl}
								githubUrl={project.githubUrl}
								githubIcon={project.githubIcon}
								project={project}
							/>
						)
					}).reverse()}
				</ul>
			</div>
		</section>
	)
}