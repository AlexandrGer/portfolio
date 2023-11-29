import React from "react";
import './Skills.css';
import { skillsList } from "../../utils/skils";

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
				{skillsList.map((skill) => {
					return (
						<li className="skills__item">
							<span className="skills__tooltip">{skill.name}</span>
							<img src={skill.icon} alt={skill.name} className="skills__icon" />
						</li>
					)
				})}
			</ul>
		</section>
	)
}