import React from "react";
import './Social.css';
import vkontakte from '../../images/vk.svg';
import telegram from '../../images/telegram.svg';
import github from '../../images/github.svg';
import insta from '../../images/insta.svg';
import codewars from '../../images/codewars.svg';

export const Social = () => {
	return (
		<section className="social">
			<ul className="social__container">
				<li className="social__item">
					<a href="#" target="_blank" className="social__link">
						<img src={telegram} alt="telegram" className="social__icon" />
					</a>
				</li>
				<li className="social__item">
					<a href="#" target="_blank" className="social__link">
						<img src={vkontakte} alt="vkontakte" className="social__icon" />
					</a>
				</li>
				<li className="social__item">
					<a href="#" target="_blank" className="social__link">
						<img src={insta} alt="insta" className="social__icon" />
					</a>
				</li>
				<li className="social__item">
					<a href="#" target="_blank" className="social__link">
						<img src={github} alt="github" className="social__icon" />
					</a>
				</li>
				<li className="social__item">
					<a href="#" target="_blank" className="social__link">
						<img src={codewars} alt="codewars" className="social__icon" />
					</a>
				</li>
			</ul>
		</section>
	)
}