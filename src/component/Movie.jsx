import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../utils/actionCreator";
import { starActionType } from "../store/redux-operation/StaredMovie/staredmovie.action";
import { isStared } from "../store/redux-operation/StaredMovie/staredmovie.action";

const Movie = ({ item }) => {
  const dispatch = useDispatch();
  const { START_MOVIES } = starActionType;
  const { AllStarMovie } = useSelector((state) => state.starMovie );

  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {year}, {rating}
        </p>
        <a href="#" className="btn btn-primary">
          {[genre].join(", ")}
        </a>
      </div>

      <button
        className="btn btn-primary styled-btn"
        onClick={() => dispatch(ActionCreator(START_MOVIES, item))}
      >
        {isStared(AllStarMovie, id) ? "STARRED" : "STAR"}
      </button>
    </div>
  );
};

export default Movie;
