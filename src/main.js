import data from '../src/data/ghibli/ghibli.js';
import {filterByDirector, filterByProducer, ordenAlfaAtoZ, ordenAlfaZtoA, yearMovie, scoreMovie} from '../src/data.js';

let films = data.films;
export const allFilms = data.films;

//Importamos la data de Ghibli
const filmTitles = films.map((film) => film.title);
const filmPosters = films.map((film) => film.poster);

//BUCLEANDO PARA CREAR
function allMovies () {
    films = data.films;
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
        newMovieTitle.setAttribute("class", "filmClick");
        //Unimos los elementos al contenedor
        newMovieTitle.appendChild(titleText);
        newMovieCard.appendChild(newMoviePoster);
        newMovieCard.appendChild(newMovieTitle);
        //Ubicamos el contenedor en el DOM
        const newMovieContainer = document.getElementsByClassName("cardscontainer")[0];
        newMovieContainer.appendChild(newMovieCard);

        document.getElementsByClassName("moviecard")[i].addEventListener("click", function() {
            window.open("movies.html","_self");
        //USO LOCALSTORAGE
        localStorage.setItem("identificador",JSON.stringify(films[i]));
        });
    }
}
allMovies();

//BOTONES DE FILTRO

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


//FILTRADO DE DIRECTORES
const directorHayao = document.querySelector("#haMi");
const directorIsao = document.querySelector("#isTa");
const directorYoshifumi = document.querySelector("#yoKo");
const directorHiroyuki = document.querySelector("#hiMo");
const directorGoro = document.querySelector("#goMi");
const directorHiromasa = document.querySelector("#hiYo");

function movieCards (filterName) {
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
}

function colorFilter (){
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "whitesmoke";
    producerTakahata.style.color = "whitesmoke";
    producerMiyazaki.style.color = "whitesmoke";
    producerHara.style.color = "whitesmoke";
    producerSuzuki.style.color = "whitesmoke";
    producerNishimura.style.color = "whitesmoke";
}

directorHayao.addEventListener("click", function() {
    colorFilter();
    directorHayao.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Hayao Miyazaki");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorIsao.addEventListener("click", function() {
    colorFilter();
    directorIsao.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Isao Takahata");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorYoshifumi.addEventListener("click", function() {
    colorFilter();
    directorYoshifumi.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Yoshifumi Kondō");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorHiroyuki.addEventListener("click", function() {
    colorFilter();
    directorHiroyuki.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Hiroyuki Morita");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorGoro.addEventListener("click", function() {
    colorFilter();
    directorGoro.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Gorō Miyazaki");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorHiromasa.addEventListener("click", function() {
    colorFilter();
    directorHiromasa.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = filterByDirector(data.films, "Hiromasa Yonebayashi");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});

// FILTRADO DE PRODUCTORES
const producerTakahata = document.querySelector("#Takahata");
const producerMiyazaki = document.querySelector("#Miyazaki");
const producerHara = document.querySelector("#Hara");
const producerSuzuki = document.querySelector("#Suzuki");
const producerNishimura = document.querySelector("#Nishimura");

producerTakahata.addEventListener("click", function() {
    colorFilter();
    producerTakahata.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = filterByProducer(data.films, "Isao Takahata");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerMiyazaki.addEventListener("click", function() {
    colorFilter();
    producerMiyazaki.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = filterByProducer(data.films, "Hayao Miyazaki");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerHara.addEventListener("click", function() {
    colorFilter();
    producerHara.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = filterByProducer(data.films, "Toru Hara");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerSuzuki.addEventListener("click", function() {
    colorFilter();
    producerSuzuki.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = filterByProducer(data.films, "Toshio Suzuki");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerNishimura.addEventListener("click", function() {
    colorFilter();
    producerNishimura.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = filterByProducer(data.films, "Yoshiaki Nishimura");
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});

//HACER CLICK EN CABECERA PARA QUE ME MUESTRE TODAS LAS PELICULAS
const headerLogo = document.querySelector("#headerlogo");
headerLogo.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    colorFilter();
    allMovies();
    document.querySelector("#search-input").value = ""
})

const unfilter = document.querySelector("#unfilterbox");
unfilter.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    colorFilter();
    allMovies();
    document.querySelector("#search-input").value = ""
})

//BUSCAR PELICULA
document.querySelector("#search-icon").addEventListener("click",function(){
    const searchedMovie = document.querySelector("#search-input").value.toLowerCase();
    if (searchedMovie !== "") {
    films = data.films.filter(film => film.title.toLocaleLowerCase().includes(searchedMovie));
    //console.log(films)
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    if (films !== undefined && films.length != 0) {
        movieCards(films);
    } else {
        const messageContainer = document.createElement("div");
        messageContainer.setAttribute("class", "message");
        const messageText = document.createElement("p");
        const messageP = document.createTextNode("We are sorry, We couldn't find the movie you are looking for. Try another name or browse the main page.");
        messageContainer.appendChild(messageText);
        messageText.appendChild(messageP);
        const newMovieContainer = document.getElementsByClassName("cardscontainer")[0];
        newMovieContainer.appendChild(messageContainer);
        document.querySelector("#search-input").value = ""
    }
}
})



// SORT A-Z
let alfabeticAtoZ = document.getElementById("byAlphaAtoZ");
alfabeticAtoZ.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    ordenAlfaAtoZ(films);
    movieCards(films);
});

// SORT Z-A
let alfabeticZtoA = document.getElementById("byAlphaZtoA");
alfabeticZtoA.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    ordenAlfaZtoA(films);
    movieCards(films);
});

//SORT TO YEAR RELEASE_DATA
let yearOFMovie = document.getElementById("byYear");
yearOFMovie.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    yearMovie(films);
    movieCards(films);
});

//SORT TO YEAR rt_score
let scoreOFMovie = document.getElementById("byRate");
scoreOFMovie.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    scoreMovie(films);
    movieCards(films);
});



