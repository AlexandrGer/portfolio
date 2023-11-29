// Разное
import github from '../images/github-90.png';
// Проекты
import HowToLearn from '../images/how-to-learn.png';
import RussianTravel from '../images/RussianTravel.png';
import Mesto from '../images/Mesto.png';
import MoviesExsplorer from '../images/how-to-learn.png';
// Технологии
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import express from '../images/express.svg';
import javascript from '../images/javascript.svg';
import mongo from '../images/mongo.png';
import node from '../images/nodejs.svg';
import react from '../images/react.svg';
import webpack from '../images/webpack.svg';

export const projectsList = [
	{
		id: '1',
		image: HowToLearn,
		title: 'How to Learn',
		description: 'Статичный сайт. Подсказки по эффективному обучению.',
		websiteUrl: 'https://alexandrger.github.io/how-to-learn/',
		githubUrl: 'https://github.com/AlexandrGer/how-to-learn',
		githubIcon: github,
		skillIcons: [
			{ name: "HTML", icon: html },
			{ name: "CSS", icon: css },
		],
	},
	{
		id: '2',
		image: RussianTravel,
		title: 'Russian Travel',
		description: 'Отзывчиво-адаптивный одностраничный сайт на тему наиболее интересных мест в России для путешествий.',
		websiteUrl: 'https://alexandrger.github.io/russian-travel/',
		githubUrl: 'https://github.com/AlexandrGer/russian-travel',
		githubIcon: github,
		skillIcons: [
			{ name: "HTML", icon: html },
			{ name: "CSS", icon: css },
		],
	},
	{
		id: '3',
		image: Mesto,
		title: 'Mesto',
		description: 'Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.',
		websiteUrl: 'https://alexandrger.github.io/react-mesto-auth/sign-up',
		githubUrl: 'https://github.com/AlexandrGer/react-mesto-auth',
		githubIcon: github,
		skillIcons: [
			{ name: "HTML", icon: html },
			{ name: "CSS", icon: css },
			{ name: "JavaScript", icon: javascript },
			{ name: "React", icon: react },
		],
	},
	{
		id: '4',
		image: Mesto,
		title: 'Movies Exsplorer',
		description: 'Регистрируйтесь, ищите фильмы и сохраняйте их в избранное.',
		websiteUrl: '',
		githubUrl: 'https://github.com/AlexandrGer/movies-explorer-frontend',
		githubIcon: github,
		skillIcons: [
			{ name: "HTML", icon: html },
			{ name: "CSS", icon: css },
			{ name: "JavaScript", icon: javascript },
			{ name: "React", icon: react },
			{ name: "Node", icon: node },
			{ name: "Express", icon: express },
			{ name: "Mongo", icon: mongo },

		],
	},

]