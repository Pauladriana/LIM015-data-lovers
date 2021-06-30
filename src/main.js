
//Importamos la data de Ghibli
import data from './data/ghibli/ghibli.js';
const filmTitles = data.films.map((film) => film.title);
const filmPosters = data.films.map((film) => film.poster);

//BUCLEANDO PARA CREAR ELEMENTOS
for (let i = 0; i < filmTitles.length; i++) {
    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard");
    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filmPosters[i]);
    newMoviePoster.setAttribute("class", "movie-poster");
    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("p");
    const titleText = document.createTextNode(filmTitles[i]);
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("cardscontainer")[0];
    newMovieContainer.appendChild(newMovieCard);
}

//BOTONES DE FILTRO

/*document.getElementById("directorfilter").addEventListener("click", function() {
    document.getElementsByClassName("filteritem")[0].style.display = "block";
});*/

document.getElementById("directorfilter").addEventListener("click", function() {
    if (document.getElementsByClassName("filteritem")[0].style.display === "block") {
        document.getElementsByClassName("filteritem")[0].style.display = "none";
    } else {
        document.getElementsByClassName("filteritem")[0].style.display = "block";
    }
});

document.getElementById("productorfilter").addEventListener("click", function() {
    if (document.getElementsByClassName("filteritem")[1].style.display === "block") {
        document.getElementsByClassName("filteritem")[1].style.display = "none";
    } else {
        document.getElementsByClassName("filteritem")[1].style.display = "block";
    }
});

document.getElementById("yearfilter").addEventListener("click", function() {
    if (document.getElementsByClassName("filteritem")[2].style.display === "block") {
        document.getElementsByClassName("filteritem")[2].style.display = "none";
    } else {
        document.getElementsByClassName("filteritem")[2].style.display = "block";
    }
});

document.getElementById("scorefilter").addEventListener("click", function() {
    if (document.getElementsByClassName("filteritem")[3].style.display === "block") {
        document.getElementsByClassName("filteritem")[3].style.display = "none";
    } else {
        document.getElementsByClassName("filteritem")[3].style.display = "block";
    }
});


