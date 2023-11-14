import React from "react";
import './Promo.css';
import photo from '../../images/photo.jpg'

export const Promo = () => {
	return (
		<section className="promo">
			<div className="promo__container">
				<h1 className="promo__title">Привет, я Александр!</h1>
				<p className="promo__subtitle">
					Начинающий
					<br></br>
					<span className="promo__span">
						{`< frontend-разработчик / >`}
					</span>
				</p>
			</div>
			<img src={photo} alt="photo" className="promo__photo" />
		</section>
	)
}