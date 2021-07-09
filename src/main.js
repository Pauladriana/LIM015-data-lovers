import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


//Importamos la data de Ghibli
const filmTitles = data.films.map((film) => film.title);
const filmPosters = data.films.map((film) => film.poster);

//BUCLEANDO PARA CREAR
function allMovies () {
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
        window.open("movies.html");
    //USO LOCALSTORAGE
    localStorage.setItem("identificador",JSON.stringify(data.films[i]));
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
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "black";
});

document.getElementById("productorfilter").addEventListener("click", function() {
    if (document.getElementsByClassName("filteritem")[1].style.display === "block") {
        document.getElementsByClassName("filteritem")[1].style.display = "none";
    } else {
        document.getElementsByClassName("filteritem")[1].style.display = "block";
    }
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";
});


//FILTRADO DE DIRECTORES
const directorHayao = document.querySelector("#haMi");
const directorIsao = document.querySelector("#isTa");
const directorYoshifumi = document.querySelector("#yoKo");
const directorHiroyuki = document.querySelector("#hiMo");
const directorGoro = document.querySelector("#goMi");
const directorHiromasa = document.querySelector("#hiYo");

function filterMovies (filterName) {
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
            window.open("movies.html");
        //USO LOCALSTORAGE
        localStorage.setItem("identificador",JSON.stringify(filterName[i]));
        });
        }
    }

directorHayao.addEventListener("click", function() {
    directorHayao.style.color = "blue";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Hayao Miyazaki");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});
directorIsao.addEventListener("click", function() {
    directorHayao.style.color = "black";
    directorIsao.style.color = "blue";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";directorIsao.style.color = "blue";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Isao Takahata");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});
directorYoshifumi.addEventListener("click", function() {
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "blue";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Yoshifumi Kondō");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});
directorHiroyuki.addEventListener("click", function() {
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "blue";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Hiroyuki Morita");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});
directorGoro.addEventListener("click", function() {
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "blue";
    directorHiromasa.style.color = "black";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Gorō Miyazaki");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});
directorHiromasa.addEventListener("click", function() {
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "blue";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    const filmDirector = data.films.filter((film) => film.director === "Hiromasa Yonebayashi");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmDirector);
});

// FILTRADO DE PRODUCTORES
const producerTakahata = document.querySelector("#Takahata");
const producerMiyazaki = document.querySelector("#Miyazaki");
const producerHara = document.querySelector("#Hara");
const producerSuzuki = document.querySelector("#Suzuki");
const producerNishimura = document.querySelector("#Nishimura");

producerTakahata.addEventListener("click", function() {
    producerTakahata.style.color = "blue";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "black";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    const filmProducer = data.films.filter((film) => film.producer === "Isao Takahata");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmProducer);
});
producerMiyazaki.addEventListener("click", function() {
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "blue";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "black";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    const filmProducer = data.films.filter((film) => film.producer === "Hayao Miyazaki");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmProducer);
});
producerHara.addEventListener("click", function() {
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "blue";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "black";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    const filmProducer = data.films.filter((film) => film.producer === "Toru Hara");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmProducer);
});
producerSuzuki.addEventListener("click", function() {
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "blue";
    producerNishimura.style.color = "black";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    const filmProducer = data.films.filter((film) => film.producer === "Toshio Suzuki");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmProducer);
});
producerNishimura.addEventListener("click", function() {
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "blue";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    const filmProducer = data.films.filter((film) => film.producer === "Yoshiaki Nishimura");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    filterMovies(filmProducer);
});

//HACER CLICK EN CABECERA PARA QUE ME MUESTRE TODAS LAS PELICULAS
const ghibliLogo = document.querySelector("#ghibli-logo");
ghibliLogo.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    directorHayao.style.color = "black";
    directorIsao.style.color = "black";
    directorYoshifumi.style.color = "black";
    directorHiroyuki.style.color = "black";
    directorGoro.style.color = "black";
    directorHiromasa.style.color = "black";
    producerTakahata.style.color = "black";
    producerMiyazaki.style.color = "black";
    producerHara.style.color = "black";
    producerSuzuki.style.color = "black";
    producerNishimura.style.color = "black";
    allMovies();

})