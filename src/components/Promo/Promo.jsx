import React from "react";
import "./Promo.css";
import photo from "../../images/photo.jpg";

export const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__wrapper">
          <h1 className="promo__title">Ну привет, сталкер!</h1>
          <p className="promo__subtitle">
            Меня зовут Александр, я
            <span className="promo__span">{`< frontend-разработчик / >`}</span>
          </p>
        </div>
        <img src={photo} alt="myPhoto" className="promo__photo" />
      </div>
    </section>
  );
};
