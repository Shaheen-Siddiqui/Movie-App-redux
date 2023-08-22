import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Internal Imports:
import { findUniqueGenre, findUniqueYear } from "../utils/filterUtils";
import { ActionCreator } from "../utils/actionCreator";
import { ActionType } from "../store/redux-operation/SelectFilter/selectfilter.action";

const ListingHeader = () => {
  const { allMovie, search } = useSelector((state) => state.movieList);

  const uniqueGenres = findUniqueGenre(allMovie, "genre");
  const { FILTER_GENRE, FILTER_RATING, FILTER_RELEASE,QUERY_FILTER } = ActionType;
  const uniqueYear = findUniqueYear(allMovie);
  const dispatch = useDispatch();

  return (
    <div className="filter-movie-sace">
      <header
        className="d-flex justify-content-around gap-2 bg-dark text-white header-fix-case"
        style={{ height: "4rem" }}
      >
        <h3>IMB</h3>
        <div className="input-group mb-3 header-search">
          <input
            value={search}
            type="text"
            className="form-control header-search"
            placeholder="genre, cast, movie title"
            aria-describedby="basic-addon1"
            onChange={(event) =>
              dispatch(ActionCreator(QUERY_FILTER, event.target.value))
            }
          />
        </div>
        {/* <div className="d-flex"> */}
        <Link to="/">
          <p>Movies ||</p>
        </Link>

        <Link to="/star">
          <p>Starred Movie</p>
        </Link>
        {/* </div> */}
      </header>
      <h2>Movie</h2>

      <select
        onChange={(event) =>
          dispatch(ActionCreator(FILTER_GENRE, event.target.value))
        }
      >
        <option value="">All Genre</option>
        {uniqueGenres.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <select
        onChange={(event) =>
          dispatch(ActionCreator(FILTER_RATING, event.target.value))
        }
      >
        <option value="">Rating</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <select
        onChange={(event) =>
          dispatch(ActionCreator(FILTER_RELEASE, event.target.value))
        }
      >
        <option value="">Release Year</option>
        {uniqueYear.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <button className="btn btn-dark styled-btn">Add a Movie</button>
    </div>
  );
};

export default ListingHeader;
