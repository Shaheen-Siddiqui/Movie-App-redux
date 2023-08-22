// export const ActionType = {
//   FILTER_GENRE: "FILTER_GENRE",
//   FILTER_RATING: "FILTER_RATING",
//   FILTER_RELEASE: "FILTER_RELEASE",
//   QUERY_FILTER: "QUERY_FILTER",
// };
// export const selectFilter = (
//   array,
//   selectedGenre,
//   selectedRating,
//   selectedYear,
//   search
// ) => {
//   const filterByGenre =
//     selectedGenre.length > 0
//       ? array.filter((item) =>
//           item.genre.some((genreItem) => genreItem === selectedGenre)
//         )
//       : array;
//   const filterByRating =
//     selectedRating > 0
//       ? filterByGenre.filter((item) => item.rating == selectedRating)
//       : filterByGenre;

//   const filterByReleaseYear =
//     selectedYear > 0
//       ? filterByRating.filter((item) => item.year == selectedYear)
//       : filterByRating;
//   const filterByQuery =
//     search.length > 0
//       ? filterByReleaseYear.filter((item) =>
//           item.title.toLowerCase().includes(search.toLowerCase())
//         )
//       : filterByReleaseYear;
//   return filterByQuery;
// };
