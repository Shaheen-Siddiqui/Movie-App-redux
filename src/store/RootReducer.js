//External Imports
import {combineReducers} from 'redux'

//internal Imports
import {movieListReducer} from './redux-operation/MovieList/movielist.reducer'
import {searchFilterReducer} from './redux-operation/SelectFilter/selectfilter.reducer'
import {starMovieReducer} from './redux-operation/StaredMovie/staredmovie.reducer'

export const rootReducer=combineReducers({
    movieList:movieListReducer,
    searchFilter:searchFilterReducer,
    starMovie:starMovieReducer

})
