import React from "react";
import './Header.css';
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
	return (
		<header className="header">
			<Navigation />
		</header>
	)
}