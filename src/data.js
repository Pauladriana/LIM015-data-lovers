// estas funciones son de ejemplo

export const filterMovies = (filterName) => {
  for (let i = 0; i < filterName.length; i++) {
    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard");
    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filterName[i].poster);
    newMoviePoster.setAttribute("class", "movie-poster");
    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("p");
    const titleText = document.createTextNode(filterName[i].title);
    newMovieTitle.setAttribute("class", "filmClick");
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("cardscontainer")[0];
    newMovieContainer.appendChild(newMovieCard);
    document.getElementsByClassName("moviecard")[i].addEventListener("click", function() {
        window.open("movies.html", "_self");
    //USO LOCALSTORAGE
    localStorage.setItem("identificador",JSON.stringify(filterName[i]));
    });
    }
};

export const anotherExample = () => {
  return 'OMG';
};
