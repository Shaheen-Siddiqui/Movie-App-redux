import {ActionType} from '../../redux-operation/SelectFilter/selectfilter.action'

const initialState = {
  selectedGenre: "",
  selectedRating: 0,
  selectedYear: 0,
  search: "",
};
const { FILTER_GENRE, FILTER_RATING, FILTER_RELEASE, QUERY_FILTER } =
  ActionType;

export const searchFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_GENRE:
      return {
        ...state,
        selectedGenre: payload,
      };
    case FILTER_RATING:
      return {
        ...state,
        selectedRating: payload,
      };
    case FILTER_RELEASE:
      return {
        ...state,
        selectedYear: payload,
      };
    case QUERY_FILTER:
      return {
        ...state,
        search: payload,
      };

    default:
      return state;
  }
};
