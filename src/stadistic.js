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
        type:"line",
        data:{
            labels: uniqueDirector,
            datasets: [
                {
                    label: 'Director con la pelicula mejor botada',
                    borderColor:'red',
                    data: [10, 50, 60, 80],
                },
                {
                    label: 'Productor ',
                    borderColor:'green',
                    data: [12, 30, 50, 100],
                },
                {
                    label: 'Productor',
                    borderColor:'orange',
                    data: [12, 20, 50, 70],
                }
                
            ]
        
        },
            options:{
                scales: {
                    xAxes: [{
                        gridLines:{
                            display: false,
                        }
                    }]
                },
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
                    padding: 20,
                    boxWidth: 15,
                    fontFamily:"system-ui",
                    fontColor:"black",
                }
            },
            layout :{
                right:50,
            },
            tooltips: {
                backgroundColor:"#0584f6",
                titleFontSize:20,
                xpadding: 20,
                ypadding: 20,
                bodyFontSize: 15,
                bodySpacing: 10,
                mode: "x",
            },
            elements:{
                line: {
                    borderWidth:8,
                    fill: false,
                },
                point:{
                    radios : 6,
                    borderWidth: 4,
                    backgroundColor: "white",
                    hoverRadius: 8,
                    hoverBorderWidth: 4,
                }
            }
        }    
    })
}


function rendertCharts(){
    const ctx = document.querySelector("#chart").getContext("2d");
    totalCaseCharts(ctx)
}
rendertCharts()