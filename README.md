# Data Lovers- Studio Ghibli

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

## 2. Resumen del proyecto

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data del Studio Ghibli, entendiendo lo que el
usuario necesita.


### HTML y CSS

* [X] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [X] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [X] Construir tu aplicación respetando el diseño realizado (maquetación).
* [X] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [X] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [X] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [X] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [X] Uso de condicionales (if-else | switch | operador ternario)
* [X] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [X] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [X] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [ ] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [X] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [X] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [X] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [X] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [X] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [X] Uso de linter (ESLINT)

### Git y GitHub

* [X] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [X] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [X] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [X] Diseñar la aplicación pensando y entendiendo al usuario.
* [X] Crear prototipos para obtener feedback e iterar.
* [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [X] Planear y ejecutar tests de usabilidad.
### Definición del producto
Este trabajo es un platafoma wed responsive que contiene y muestra data de las peliculas de Studio Ghibli
### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

IDENTIFICANDO A NUESTROS USUARIOS:
¿Quiénes son los principales usuarios de producto?
-Publico en general que disfrute de las peliculas de Ghibli y quiera saber mas.
¿Cuáles son los objetivos de estos usuarios en relación con el producto?
-Saber y conocer mas sobre las peliculas del Studio Ghibli
¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
-Desean una pagina web amigable con el usuario donde se muestre películas detallando sus componentes (personajes, directores, locaciones, año, etc)
¿Cuándo utilizan o utilizarían el producto?
-En momentos de Ocio.

Acontinuacion presentamos las historias de usuario:

1)Historia de Usuario 1: Yo como fan de Studio Ghibli, quiero una pagina web, donde pueda ver cuales son las peliculas de Studio Ghibli.

2)Historia de Usuario 2: Yo como usuaria de la web de Ghibli, quiero saber más detalles sobre las películas de Ghibli, donde pueda ver descripción, los personajes, las locaciones y vehiculos de cada pelicula.

3)Historia de Usuario 3: Yo como usuaria de la web de Ghibli,quiero filtrar las películas Ghibli, donde pueda ver las peliculas de acuerdo a su productor y/o director.

4)Historia de Usuario 4: Yo como usuaria de la web de Ghibli, quiero ordenar las películas Ghibli, donde pueda ordenar las películas alfabéticamente, por año y por puntaje.

5)Historia de Usuario 5: Yo como usuaria de la web de Ghibli, quiero buscar la  información de las películas Ghibli, donde pueda ver un buscador y pueda colocar el nombre de la películas y así ver los personajes, las locaciones y vehículos de cada película sin necesidad de explorar toda la web.

6)Historia de Usuario 6: Yo como usuaria de la web de Ghibli, quiero saber mas detalles de los personajes de ghibli, donde pueda ver el total de género en cada película.

7)Historia de Usuario 7: Yo como usuaria de la web de Ghibli, quiero ver estadísticas de directores, donde pueda saber de todos los directores , su mejor película votada y por ende quien tiene las mejores películas.
### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
![prototipoinicial](https://user-images.githubusercontent.com/85115054/126575854-4df295bb-28b2-4327-9a66-763712800bb7.JPG)



Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Testeos de usabilidad

Se realizaron testeos de usabilidad por cada sprint, donde se pudo iterar el prototipo inicial, y adaptar el diseño a las necesidades del usuario .
1)Se determino en un comienzo la implementacion de 3 vistas de informacion (una para pelicula,personajes,locaciones) sin estar conectadas entre si.Al moento de la presentacion del prototipo se decidio por cambiar a solo una pagina princiapl que mostrara todas las peliculas y que la informacion restante se visualizara al seleccionar la pelicula.
2)La paleta de colores inicial se cambio a un tonalidad azul para identificarse con el logo de ghibli que es de ese color, ya que la paleta anterior no expresaba la identidad de la marca.
3)La interactividad con los botones fue rediseñada para ofrecer al usurio una claridad de las opciones de interaccion con la pagina, para mejorar la experiencia de navegacion del usuario.

#### Prototipo final

