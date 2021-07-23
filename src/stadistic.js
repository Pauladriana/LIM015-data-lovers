import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

//VARIABLES CAROUSEL
const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

//DATA ALMACENADA EN UNA SOLA VARIABLE
let films = data.films;

//DATA DE DIRECTORES
let filmDire = films.map((film) => film.director);
/* eslint-disable */

/* eslint-disable */

//DATA DE DIRECTORES ALMACENANDO SUS VALORES UNICOS
let uniqueDirector = [...new Set(filmDire)];

//ALESENAMOS LOS SCORES
function getScore(films) {
  let majorScore = 0;
  let newFilm;
  films.map((ele) => {
    if (Number(ele.rt_score) > majorScore) {
      majorScore = Number(ele.rt_score);
      newFilm = ele;
    }
  });
  recomendedFilms.push(newFilm);
  return majorScore;
}

//DATA DEL SCORE DE LAS PELICULAS DE GHIBLI
const filmScore = [];
let recomendedFilms = [];
uniqueDirector.map((ele) => {
  let flimsByDirector = [];
  films.filter((pel) => {
    if (pel.director == ele) {
      flimsByDirector.push(pel);
    }
  });
  filmScore.push(getScore(flimsByDirector));
});
console.log(filmScore);
console.log(recomendedFilms);

//DIAGRAMA DE FLUJO
function totalCaseCharts(ctx) {
  const charts = new Chart(ctx, {
    type: "bar",
    data: {
      labels: uniqueDirector,
      datasets: [
        {
          label: "Director con la pelicula mejor botada",
          backgroundColor: "rgb(108, 233, 255)",
          data: filmScore,
          barThickness: 80,
        },
      ],
    },
    options: {
      layout: {
        padding: 20,
      },
    },
  });
}

function rendertCharts() {
  const ctx = document.querySelector("#chart").getContext("2d");
  totalCaseCharts(ctx);
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontColor = "blue";
}
rendertCharts();


//INICIO CAROUSEL 
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// CAROUSEL EVENT LISTENER PARA FECHA IZQUIERDA ----- -----//
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//HOVER CAROUSEL 
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

function movieCards () {
    for (let i = 0; i < recomendedFilms.length; i++) {
        //Creamos el contenedor
        const newMovieCard = document.createElement("div");
        newMovieCard.setAttribute("class", "pelicula");
        //Creamos el a
        const newMovieA = document.createElement("a");
        newMovieCard.setAttribute("class", "aRef");
        //Creamos el elemento de imagen
        const newMoviePoster = document.createElement("img");
        newMoviePoster.setAttribute("src", '');
        //Unimos los elementos al contenedor
        newMovieA.appendChild(newMoviePoster);
        newMovieCard.appendChild(newMovieA);
        //Ubicamos el contenedor en el DOM
        const newMovieContainer = document.getElementsByClassName("carousel")[0];
        newMovieContainer.appendChild(newMovieCard);
        document.getElementsByClassName("pelicula")[i].addEventListener("click", function() {
            window.open("movies.html", "_self");
        //USO LOCALSTORAGE
        localStorage.setItem("identificador",JSON.stringify(recomendedFilms[i]));
        });
    }
}
movieCards();