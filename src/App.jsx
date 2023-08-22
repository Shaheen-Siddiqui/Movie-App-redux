import React,{lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import MovieListing from "./page/MovieListing";
import StarredMovie from "./page/StarredMovie";

function App() {
  return (
    <>
    <Suspense fallback="loading...">

      <Routes>
        <Route path='/' element={<MovieListing/>} />
      <Route path='star' element={<StarredMovie/>}/>
      </Routes>

    </Suspense>
    </>
  );
}

export default App;
