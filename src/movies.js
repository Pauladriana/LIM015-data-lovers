//IMPORTAMOS LA DATA
import {charactersSum, malesSum, femalesSum, unknowSum} from './data.js';
const dataContenedora = JSON.parse(localStorage.getItem("identificador"));
//console.log (dataContenedora);

//linkea titulo de mi html a mi js';
const titulo = document.getElementById("title");
const imgPortada = document.getElementById("imgFilms");
const descriptionPortada = document.getElementById( "descriptionFilms");
const filmDirector = document.getElementById("filmDirector");
const filmProducer = document.getElementById("filmProducer");
const filmYear = document.getElementById("filmyear");
const filmScore = document.getElementById("filmScore");


//MOSTAR TRAILER
const trailer = document.getElementById('player');
trailer.innerHTML = dataContenedora.youTube;

//linkea todo el html  y lo trae al Js';
titulo.innerHTML = dataContenedora.title;
imgPortada.setAttribute("src", dataContenedora.poster);
descriptionPortada.innerHTML = dataContenedora.description;
filmDirector.innerHTML= dataContenedora.director;
filmProducer.innerHTML = dataContenedora.producer;
filmYear.innerHTML= dataContenedora.release_date;
filmScore.innerHTML = dataContenedora.rt_score;
//console.log(dataContenedora.youTube);

//CALCULO DE PERSONAJES
const allCharacters = dataContenedora.people;
document.getElementById("totalcrt").innerHTML = charactersSum(allCharacters);
document.getElementById("nummale").innerHTML = malesSum(allCharacters);
document.getElementById("numfemale").innerHTML = femalesSum(allCharacters);
document.getElementById("numunknow").innerHTML = unknowSum(allCharacters);

//imprimiendo people personajes
dataContenedora.people.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    const newCharacterCardMovie = document.createElement("div");
    newCharacterCardMovie.setAttribute("class","containerPeople");
    const newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageCharacter');
    const newCharacterImgMovie = document.createElement("img");
    newCharacterImgMovie.setAttribute("src", ele.img);
    newCharacterImgMovie.setAttribute('class', 'characterImg');
    const titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newCharacterCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newCharacterImgMovie);
    newCharacterCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    const newMovieCont = document.getElementById("contenedorPadrePeople");
    newMovieCont.appendChild(newCharacterCardMovie);
})

//LOCACIONES
dataContenedora.locations.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    const newLocationCardMovie = document.createElement("div");
    newLocationCardMovie.setAttribute("class","containerLocation");
    const newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageLocation');
    const newLocationImgMovie = document.createElement("img");
    newLocationImgMovie.setAttribute("src", ele.img);
    newLocationImgMovie.setAttribute('class', 'locationImg');
    const titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newLocationCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newLocationImgMovie);
    newLocationCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    const newMovieCont = document.getElementsByClassName("containerAllLocation")[0];
    newMovieCont.appendChild(newLocationCardMovie);
    if (newLocationCardMovie) {
        document.getElementById("location").style.display = "block";
    }
})

//VEHICULOS
dataContenedora.vehicles.map(ele => {
    // CREACION de ETIQUETAS DE HTML
    const newVehicleCardMovie = document.createElement("div");
    newVehicleCardMovie.setAttribute("class","containerVehicles");
    const newCntImg = document.createElement("div");
    newCntImg.setAttribute('class', 'cntImageVehicle');
    const newVehicleImgMovie = document.createElement("img");
    newVehicleImgMovie.setAttribute("src", ele.img);
    newVehicleImgMovie.setAttribute('class', 'vehicleImg');
    const titleOfImg = document.createElement("label");
    titleOfImg.setAttribute('class', 'descriptionImg');
    titleOfImg.innerHTML = ele.name;


    // ASIGNANDO JERARQUIA a LAS ETIQUETAS HTML CREADAS PREVIAMENTE
    newVehicleCardMovie.appendChild(newCntImg);
    newCntImg.appendChild(newVehicleImgMovie);
    newVehicleCardMovie.appendChild(titleOfImg);

    // UNIENDOLO CON EL DOM
    const newMovieCont = document.getElementsByClassName("containerAllVehicles")[0];
    newMovieCont.appendChild(newVehicleCardMovie);
    if (newVehicleCardMovie) {
        document.getElementById("vehicles").style.display = "block";
    }

})

//HACER CLICK EN CABECERA PARA QUE ME MUESTRE TODAS LAS PELICULAS
const headerLogo = document.querySelector("#headerlogo");
headerLogo.addEventListener("click", function(){
    window.open("index.html", "_self")
})
