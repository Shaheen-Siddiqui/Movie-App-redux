import { starActionType } from "../StaredMovie/staredmovie.action";

const initialState = {
  AllStarMovie: [],
};
const { START_MOVIES } = starActionType;

export const starMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_MOVIES:
      let starMovie =
        state.AllStarMovie.find((item) => item == payload) == undefined
          ? [...state.AllStarMovie, payload]
          : state.AllStarMovie.filter((item) => item.id !== payload.id);

      return {
        ...state,
        AllStarMovie: starMovie,
      };

    default:
      return state;
  }
};
