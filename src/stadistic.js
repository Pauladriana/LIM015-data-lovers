/*import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


//DATA ALMACENADA EN UNA SOLA VARIABLE
let films = data.films;

//DATA DE DIRECTORES 
let filmDire = films.map((film) => film.director);

//DATA DE DIRECTORES ALMACENANDO SUS VALORES UNICOS 
let uniqueDirector = [...new Set(filmDire)];


//ALESENAMOS LOS SCORES
function getScore(films) {
    let majorScore = 0;
    films.map(ele => {
        if (Number(ele.rt_score) > majorScore) {
            majorScore = Number(ele.rt_score);
        }
    });
    return majorScore;
}

 //DATA DEL SCORE DE LAS PELICULAS DE GHIBLI
const filmScore = [];
uniqueDirector.map(ele => {
    let flimsByDirector = [];
    films.filter(pel => {
        if (pel.director == ele) {
            flimsByDirector.push(pel);
        }
    });
    filmScore.push(getScore(flimsByDirector));
});
console.log(filmScore);


//DIAGRAMA DE FLUJO
function totalCaseCharts(ctx){
    const charts = new Chart(ctx,{
        type:"bar",
        data:{
            labels: uniqueDirector,
            datasets: [
                {
                    label: 'Director con la pelicula mejor botada',
                    borderColor:'red',
                    data: filmScore,
                }
            ]
        }    
    })
}


function rendertCharts(){
    const ctx = document.querySelector("#chart").getContext("2d");
    totalCaseCharts(ctx)
}
rendertCharts()*/