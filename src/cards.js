import React from "react";
import "./styles/card.css";

const Cards = (props) => {
  // Whatever you render out in the Slider will be draggable 'slides'
  const { className, title, name } = props;
  return (
    <article className={`card ${className}`}>
      <header className={`card-header`}>
        <p>july 5th 2021</p>
        
          <h2>{name}</h2>
       
      </header>
      <div className="card-author">
        <a href="#" className="author-avatar">
          <img src="./img.jpg" alt="" />
        </a>

        <div className="author-name">
          <div className="author-name-prefix">Title : </div>
          {title}
        </div>
      </div>
    </article>
  );
};

export default Cards;
