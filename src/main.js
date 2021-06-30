import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//linkea titulo de mi html a mi js';
let titulo = document.getElementById("title");  

//linkea todo el html  y lo trae al Js';
titulo.innerHTML = data.films[0].title;
console.log(example, data.films);
console.log(example, data.films[0].title);
