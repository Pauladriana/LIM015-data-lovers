
let dataContenedora = JSON.parse(localStorage.getItem("identificador"));
//console.log (dataContenedora);

//linkea titulo de mi html a mi js';
let titulo = document.getElementById("title");
let imgPortada = document.getElementById("imgFilms");
let descriptionPortada = document.getElementById( "descriptionFilms");

//MOSTAR TRAILER
let trailer = document.getElementById('player');
trailer.innerHTML = dataContenedora.youTube;

//linkea todo el html  y lo trae al Js';
titulo.innerHTML = dataContenedora.title;
imgPortada.setAttribute("src", dataContenedora.poster);
descriptionPortada.innerHTML = dataContenedora.description;
console.log(dataContenedora.youTube);

//CALCULO DE PERSONAJES
const allCharacters = dataContenedora.people;
let sumOfCharacters = 0;
let maleCharacters = 0;
let femaleCharacters = 0;
let unknowGender = 0;
function charactersSum () {
    for (let i=0; i < allCharacters.length; i++) {
        sumOfCharacters += 1;
    }
    return sumOfCharacters
}
function malesSum () {
    for (let i=0; i < allCharacters.length; i++) {
        if (allCharacters[i].gender == "Male") {
        maleCharacters += 1;
        }
    }
    return maleCharacters
}
function femalesSum () {
    for (let i=0; i < allCharacters.length; i++) {
        if (allCharacters[i].gender == "Female" ) {
            femaleCharacters += 1;
        }
    }
    return femaleCharacters
}
function unknowSum () {
    for (let i=0; i < allCharacters.length; i++) {
        if (allCharacters[i].gender.includes("NA"))
        unknowGender += 1;
    }
    return unknowGender
}
document.getElementById("totalcrt").innerHTML = charactersSum();
document.getElementById("nummale").innerHTML = malesSum();
document.getElementById("numfemale").innerHTML = femalesSum();
document.getElementById("numunknow").innerHTML = unknowSum();

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

//VIDEO DE PELICULAS

