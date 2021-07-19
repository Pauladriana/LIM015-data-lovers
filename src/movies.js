import {charactersSum, malesSum, femalesSum, unknowSum} from '../src/data.js';

let dataContenedora = JSON.parse(localStorage.getItem("identificador"));
//console.log (dataContenedora);

//linkea titulo de mi html a mi js';
let titulo = document.getElementById("title");
let imgPortada = document.getElementById("imgFilms");
let descriptionPortada = document.getElementById( "descriptionFilms");
//let characterImgMovie = data.films.map((film) => film.people);


//linkea todo el html  y lo trae al Js';
titulo.innerHTML = dataContenedora.title;
imgPortada.setAttribute("src", dataContenedora.poster);
descriptionPortada.innerHTML = dataContenedora.description;

//CALCULO DE PERSONAJES
const allCharacters = dataContenedora.people;
document.getElementById("totalcrt").innerHTML = charactersSum(allCharacters);
document.getElementById("nummale").innerHTML = malesSum(allCharacters);
document.getElementById("numfemale").innerHTML = femalesSum(allCharacters);
document.getElementById("numunknow").innerHTML = unknowSum(allCharacters);

//imprimiendo people personajes
dataContenedora.people.map(ele => {
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

//LOCACIONES
dataContenedora.locations.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    let newLocationCardMovie = document.createElement("div");
    newLocationCardMovie.setAttribute("class","containerLocation");
    let newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageLocation');
    let newLocationImgMovie = document.createElement("img");
    newLocationImgMovie.setAttribute("src", ele.img);
    newLocationImgMovie.setAttribute('class', 'locationImg');
    let titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newLocationCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newLocationImgMovie);
    newLocationCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    let newMovieCont = document.getElementsByClassName("containerAllLocation")[0];
    newMovieCont.appendChild(newLocationCardMovie);
    if (newLocationCardMovie) {
        document.getElementById("location").style.display = "block";
    }
})

//VEHICULOS
dataContenedora.vehicles.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    let newVehicleCardMovie = document.createElement("div");
    newVehicleCardMovie.setAttribute("class","containerVehicles");
    let newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageVehicle');
    let newVehicleImgMovie = document.createElement("img");
    newVehicleImgMovie.setAttribute("src", ele.img);
    newVehicleImgMovie.setAttribute('class', 'vehicleImg');
    let titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newVehicleCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newVehicleImgMovie);
    newVehicleCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    let newMovieCont = document.getElementsByClassName("containerAllVehicles")[0];
    newMovieCont.appendChild(newVehicleCardMovie);
    if (newVehicleCardMovie) {
        document.getElementById("vehicles").style.display = "block";
    }

})

//HACER CLICK EN CABECERA PARA QUE ME MUESTRE TODAS LAS PELICULAS
const ghibliLogo = document.querySelector("#ghibli-logo");
ghibliLogo.addEventListener("click", function(){
    window.open("index.html", "_self")
})

