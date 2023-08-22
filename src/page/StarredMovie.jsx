import React from "react";
import Movie from "../component/Movie";
import { useSelector } from "react-redux";

const StarredMovie = () => {
  const { AllStarMovie } = useSelector((state) => state.starMovie);
  return (
    <div>
      {AllStarMovie.map((item) => {
        return <Movie item={item} key={item.id} />;
      })}
    </div>
  );
};

export default StarredMovie;
