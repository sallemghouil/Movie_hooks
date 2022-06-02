import React from "react";
import StarRatingComponent from "react-star-rating-component";

import "./movieCard.css";

const MovieCard = ({ el, deleteMovie }) => {
  return (
    <div>
      <div className="card">
        <img src={el.posterUrl} alt="" />
        <div className="descriptions">
          <h1>{el.title}</h1>
          <StarRatingComponent edit={false} name="rate" starColor="red" value={el.rating} starCount={10} />
          <p>{el.description}</p>
          <button onClick={() => deleteMovie(el.id)}>
            <i className="fab fa-youtube" /> Delete movie
          </button>
          
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
