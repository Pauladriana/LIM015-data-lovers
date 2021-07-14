import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


//DATA ALMACENADA EN UNA SOLA VARIABLE
let films = data.films;

//DATA DE DIRECTORES 
let filmDire = films.map((film) => film.director);

//DATA DE DIRECTORES ALMACENANDO SUS VALORES UNICOS 
let uniqueDirector = [...new Set(filmDire)];


/*const filmTitles = films.map((film) => film.title);
console.log(filmTitles);


const filmYear = films.map((film) => film.release_date);
console.log(filmYear);*/
/*function getScore(films) {
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
*/
const filmScore = films.map((film) => film.rt_score);
//DIAGRAMA DE FLUJO
function totalCaseCharts(ctx){
    const charts = new Chart(ctx,{
        type:"bar",
        data:{
            labels: uniqueDirector,
            datasets: [
                {
                    label: 'Director con la pelicula mejor botada',
                    data: filmScore,
                }
            ]
        
        },
       /* options:{
            title:{
                display: true,
                text: "Director con la pelicula mejor botada",
                fontSize:30,
                padding:30,
                fontColor:"#12619c",
            },
            legend:{
                position:"bottom",
                labels:{
                    padding:20,
                    boxWidth:25,
                    fontFamily:"system-ui"
                    fontColor:black,
                }
            },
            tooltips{
                backgroundColor:"#0584f6",
                titleFontSize:20,
                
            }
            elements:
            bar:{
                borderWidth:8,
                fill: black,

            }*/
        
    })
}


function rendertCharts(){
    const ctx = document.querySelector("#chart").getContext("2d");
    totalCaseCharts(ctx)
}
rendertCharts()