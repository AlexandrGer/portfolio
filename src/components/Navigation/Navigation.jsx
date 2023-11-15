import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__items">
				<li className="navigation__item">
					<NavLink to='/' className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link navigation__link_inactive"}`}>
						Главная
					</NavLink>
				</li>
				{/* <li className="navigation__item">
					<NavLink to='/skills' className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link navigation__link_inactive"}`}>
						Навыки
					</NavLink>
				</li> */}
				<li className="navigation__item">
					<NavLink to='/projects' className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link navigation__link_inactive"}`}>
						Проекты
					</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to='/resume' className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link navigation__link_inactive"}`}>
						Резюме
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}