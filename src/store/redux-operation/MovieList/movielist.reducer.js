import { movies } from "../../../database/data";


const initialState = {
  allMovie: movies,
};

export const movieListReducer = (state = initialState, { type, payload }) => {
  return state
};
