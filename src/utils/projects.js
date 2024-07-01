// Разное
import github from "../images/github-90.png";

// Проекты
import HowToLearn from "../images/how-to-learn.png";
import RussianTravel from "../images/RussianTravel.png";
import Mesto from "../images/Mesto.png";
import MoviesExsplorer from "../images/how-to-learn.png";

// Технологии
import HTML from "../images/skills/HTML.svg";
import CSS from "../images/skills/CSS.svg";
import JavaScript from "../images/skills/JavaScript.svg";
import React from "../images/skills/React.svg";
import TypeScript from "../images/skills/TypeScript.svg";
import NextJS from "../images/skills/Next.js.svg";
import Redux from "../images/skills/Redux.svg";
import NodeJS from "../images/skills/Node.js.svg";
import MongoDB from "../images/skills/MongoDB.png";
import Express from "../images/skills/Express.svg";

export const projectsList = [
  {
    id: "1",
    image: HowToLearn,
    title: "How to Learn",
    description: "Статичный сайт. Подсказки по эффективному обучению.",
    websiteUrl: "https://alexandrger.github.io/how-to-learn/",
    githubUrl: "https://github.com/AlexandrGer/how-to-learn",
    githubIcon: github,
    skillIcons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
    ],
  },
  {
    id: "2",
    image: RussianTravel,
    title: "Russian Travel",
    description:
      "Отзывчиво-адаптивный одностраничный сайт на тему наиболее интересных мест в России для путешествий.",
    websiteUrl: "https://alexandrger.github.io/russian-travel/",
    githubUrl: "https://github.com/AlexandrGer/russian-travel",
    githubIcon: github,
    skillIcons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
    ],
  },
  {
    id: "3",
    image: Mesto,
    title: "Mesto",
    description:
      "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.",
    websiteUrl: "https://alexandrger.github.io/react-mesto-auth/sign-up",
    githubUrl: "https://github.com/AlexandrGer/react-mesto-auth",
    githubIcon: github,
    skillIcons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: React },
    ],
  },
  {
    id: "4",
    image: Mesto,
    title: "Movies Exsplorer",
    description: "Регистрируйтесь, ищите фильмы и сохраняйте их в избранное.",
    websiteUrl: "",
    githubUrl: "https://github.com/AlexandrGer/movies-explorer-frontend",
    githubIcon: github,
    skillIcons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: React },
      { name: "Node", icon: NodeJS },
      { name: "Express", icon: Express },
      { name: "Mongo", icon: MongoDB },
    ],
  },
];
