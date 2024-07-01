import React from "react";
import "./Skills.css";
import {
  hardSkills,
  middleSkills,
  generalSkills,
  juniorSkills,
} from "../../utils/skils";

export const Skills = () => {
  return (
    <section className="skills">
      <div>
        <p className="skills__title">
          const
          <span className="skills__span">{` hardSkills `}</span>=
        </p>
        <ul className="skills__container">
          {hardSkills.map((skill, index) => (
            <li className="skills__item" key={index}>
              <span className="skills__tooltip">{skill.name}</span>
              <img src={skill.icon} alt={skill.name} className="skills__icon" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="skills__title">
          const
          <span className="skills__span">{` middleSkills `}</span>=
        </p>
        <ul className="skills__container">
          {middleSkills.map((skill, index) => (
            <li className="skills__item" key={index}>
              <span className="skills__tooltip">{skill.name}</span>
              <img src={skill.icon} alt={skill.name} className="skills__icon" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="skills__title">
          const
          <span className="skills__span">{` juniorSkills `}</span>=
        </p>
        <ul className="skills__container">
          {juniorSkills.map((skill, index) => (
            <li className="skills__item" key={index}>
              <span className="skills__tooltip">{skill.name}</span>
              <img src={skill.icon} alt={skill.name} className="skills__icon" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="skills__title">
          const
          <span className="skills__span">{` generalSkills `}</span>=
        </p>
        <ul className="skills__container">
          {generalSkills.map((skill, index) => (
            <li className="skills__item" key={index}>
              <span className="skills__tooltip">{skill.name}</span>
              <img src={skill.icon} alt={skill.name} className="skills__icon" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
