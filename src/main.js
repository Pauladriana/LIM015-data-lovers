import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let films = data.films;

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

directorHayao.addEventListener("click", function() {
    directorHayao.style.color = "#ffd092";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Hayao Miyazaki");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorIsao.addEventListener("click", function() {
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "#ffd092";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Isao Takahata");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorYoshifumi.addEventListener("click", function() {
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "#ffd092";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Yoshifumi Kondō");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorHiroyuki.addEventListener("click", function() {
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "#ffd092";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Hiroyuki Morita");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorGoro.addEventListener("click", function() {
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "#ffd092";
    directorHiromasa.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Gorō Miyazaki");
    //console.log(filmDirector);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
directorHiromasa.addEventListener("click", function() {
    directorHayao.style.color = "whitesmoke";
    directorIsao.style.color = "whitesmoke";
    directorYoshifumi.style.color = "whitesmoke";
    directorHiroyuki.style.color = "whitesmoke";
    directorGoro.style.color = "whitesmoke";
    directorHiromasa.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[0].style.display = "none";
    films = data.films.filter((film) => film.director === "Hiromasa Yonebayashi");
    //console.log(filmDirector);
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
    producerTakahata.style.color = "#ffd092";
    producerMiyazaki.style.color = "whitesmoke";
    producerHara.style.color = "whitesmoke";
    producerSuzuki.style.color = "whitesmoke";
    producerNishimura.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = data.films.filter((film) => film.producer === "Isao Takahata");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerMiyazaki.addEventListener("click", function() {
    producerTakahata.style.color = "whitesmoke";
    producerMiyazaki.style.color = "#ffd092";
    producerHara.style.color = "whitesmoke";
    producerSuzuki.style.color = "whitesmoke";
    producerNishimura.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = data.films.filter((film) => film.producer === "Hayao Miyazaki");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerHara.addEventListener("click", function() {
    producerTakahata.style.color = "whitesmoke";
    producerMiyazaki.style.color = "whitesmoke";
    producerHara.style.color = "#ffd092";
    producerSuzuki.style.color = "whitesmoke";
    producerNishimura.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = data.films.filter((film) => film.producer === "Toru Hara");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerSuzuki.addEventListener("click", function() {
    producerTakahata.style.color = "whitesmoke";
    producerMiyazaki.style.color = "whitesmoke";
    producerHara.style.color = "whitesmoke";
    producerSuzuki.style.color = "#ffd092";
    producerNishimura.style.color = "whitesmoke";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = data.films.filter((film) => film.producer === "Toshio Suzuki");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});
producerNishimura.addEventListener("click", function() {
    producerTakahata.style.color = "whitesmoke";
    producerMiyazaki.style.color = "whitesmoke";
    producerHara.style.color = "whitesmoke";
    producerSuzuki.style.color = "whitesmoke";
    producerNishimura.style.color = "#ffd092";
    document.getElementsByClassName("filteritem")[1].style.display = "none";
    films = data.films.filter((film) => film.producer === "Yoshiaki Nishimura");
    //console.log(filmProducer);
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    movieCards(films);
});

//HACER CLICK EN CABECERA PARA QUE ME MUESTRE TODAS LAS PELICULAS
const ghibliLogo = document.querySelector("#headerlogo");
ghibliLogo.addEventListener("click", function(){
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
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


// ***************  SORTING *****************
function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function compareRade(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

// SORT A-Z
let alfabeticAtoZ = document.getElementById("byAlphaAtoZ");
alfabeticAtoZ.addEventListener("click", ordenAlfaAtoZ);
function ordenAlfaAtoZ() {
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    films.sort(function(a, b) {
        return compareStrings(a.title, b.title);
    })
    movieCards(films);
}

// SORT Z-A
let alfabeticZtoA = document.getElementById("byAlphaZtoA");
alfabeticZtoA.addEventListener("click", ordenAlfaZtoA);
function ordenAlfaZtoA() {
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    films.sort(function(a, b) {
        return compareStrings(b.title, a.title);
    })
    movieCards(films);
}

//SORT TO YEAR RELEASE_DATA

let yearOFMovie = document.getElementById("byYear");
yearOFMovie.addEventListener("click", yearMovie);
function yearMovie() {
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    films.sort(function(a, b) {
        return compareStrings(a.release_date, b.release_date);
    })
    movieCards(films);
}

//SORT TO YEAR rt_score

let scoreOFMovie = document.getElementById("byRate");
scoreOFMovie.addEventListener("click", scoreMovie);
function scoreMovie() {
    document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
    films.sort(function(a, b) {
        return compareRade(Number(b.rt_score), Number(a.rt_score));
    });
    movieCards(films);
}



