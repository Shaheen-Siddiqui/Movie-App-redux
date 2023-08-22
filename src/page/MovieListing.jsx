import React from "react";
import { useDispatch, useSelector } from "react-redux";

//internal imports;
import ListingHeader from "../component/ListingHeader";
import { selectFilter } from "../store/redux-operation/SelectFilter/selectfilter.action";
import { ActionCreator } from "../utils/actionCreator";
import { starActionType } from "../store/redux-operation/StaredMovie/staredmovie.action";
import Movie from "../component/Movie";

const MovieListing = () => {
  const dispatch = useDispatch();
  const { allMovie } = useSelector((state) => state.movieList);
  const { START_MOVIES } = starActionType;

  const { selectedGenre, selectedRating, selectedYear, search } = useSelector(
    (state) => state.searchFilter
  );
  const selectFilterListing = selectFilter(
    allMovie,
    selectedGenre,
    selectedRating,
    selectedYear,
    search
  );

  return (
    <div>
      <ListingHeader />
      <div>
        <div className="d-flex flex-wrap">
          {selectFilterListing.map((item, index) => {
            return <Movie item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
