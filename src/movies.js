import data from './data/ghibli/ghibli.js';

//linkea titulo de mi html a mi js';
let titulo = document.getElementById("title"); 
let imgPortada = document.getElementById("imgFilms");
let descriptionPortada = document.getElementById( "descriptionFilms");
//let characterImgMovie = data.films.map((film) => film.people);


//linkea todo el html  y lo trae al Js';
titulo.innerHTML = data.films[0].title;
imgPortada.setAttribute("src", data.films[0].poster);
descriptionPortada.innerHTML = data.films[0].description;

//imprimiendo people personajes
data.films[0].people.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    let newCharacterCardMovie = document.createElement("div");
    newCharacterCardMovie.setAttribute("class","containerPeople");
    let newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageCharacter');
    let newCharacterImgMovie = document.createElement("img");
    newCharacterImgMovie.setAttribute("src", ele.img);
    newCharacterImgMovie.setAttribute('class', 'characterImg');
    let titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newCharacterCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newCharacterImgMovie);
    newCharacterCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    let newMovieCont = document.getElementById("contenedorPadrePeople");
    newMovieCont.appendChild(newCharacterCardMovie);
})