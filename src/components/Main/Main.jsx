import React from "react";
import './Main.css'
import { Promo } from "../Promo/Promo";
import { AboutMe } from "../AboutMe/AboutMe";
import { Footer } from "../Footer/Footer";

export const Main = () => {
	return (
		<>
			<Promo />
			<AboutMe />
			<Footer />
		</>
	)
}