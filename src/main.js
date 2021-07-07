import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


//Importamos la data de Ghibli
const filmTitles = data.films.map((film) => film.title);
const filmPosters = data.films.map((film) => film.poster);
//const filmDescription = data.films.map((film) => film.description);
const people = data.films.map((film) => film.people);
console.log(people)

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

/*PAGINA DE FILM
    document.getElementsByClassName("filmClick")[i].addEventListener("click", function() {
        document.getElementById("filmdescription").innerHTML = filmDescription[i];
        document.getElementById("imgFilms").setAttribute("src", filmPosters[i]);
        document.getElementById("selectedfilm").innerHTML = filmTitles[i];
        const newPeopleContainer = document.getElementsByClassName("peoplecontainer")[0];
        newPeopleContainer.innerHTML = "";

        //personajes
        for (let j = 0; j < people.length; j++) {
            const peopleName = people[i][j].name;
            console.log(peopleName);
            const peoplePhoto = people[i][j].img;
            console.log(peoplePhoto);
        //Creamos el contenedor
        const newPeopleCard = document.createElement("div");
        newPeopleCard.setAttribute("class", "peoplecard");
        //Creamos el elemento de imagen
        const newPeoplePhoto = document.createElement("img");
        newPeoplePhoto.setAttribute("src", peoplePhoto);
        newPeoplePhoto.setAttribute("class", "people-photo");
        //Creamos el elemento de titulo
        const newPeopleName = document.createElement("p");
        const nameText = document.createTextNode(peopleName);
        //Unimos los elementos al contenedor
        newPeopleName.appendChild(nameText);
        newPeopleCard.appendChild(newPeoplePhoto);
        newPeopleCard.appendChild(newPeopleName);
        //Ubicamos el contenedor en el DOM
        newPeopleContainer.appendChild(newPeopleCard);
        }
    })*/
}

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


