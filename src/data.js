// estas funciones son de ejemplo

export const filterMovies = (arraytoFilter, filterType, filterValue) => {
  const filterResult = arraytoFilter.filter((film) => film.filterType === filterValue);
  return filterResult;
};

export const anotherExample = () => {
  return 'OMG';
};
