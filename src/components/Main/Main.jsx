import React from "react";
import './Main.css'
import { Promo } from "../Promo/Promo";
import { AboutMe } from "../AboutMe/AboutMe";
import { Skills } from "../Skills/Skills";

export const Main = () => {
	return (
		<>
			<Promo />
			<div className="wrapper">
				<AboutMe />
				<Skills />
			</div>
		</>
	)
}