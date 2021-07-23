//Carrousel
const carrousel = document.querySelector("#carousel");
const right = document.querySelector("#flecha-derecha");
const left = document.querySelector("#flecha-izquierda");


right.addEventListener("click", function() {
  carrousel.style.transition = 'width 0.3s linear';
  setTimeout(function(){
    const primerSlide = carrousel.firstElementChild;
    carrousel.appendChild(primerSlide);
    carrousel.style.transition = 'unset';
    carrousel.style.marginLeft = 0;
    }, 500)
})

left.addEventListener("click", function() {
  carrousel.style.transition = 'width 0.3s linear';
  setTimeout(function(){
    const ultimoSlide = carrousel.lastElementChild;
    carrousel.insertBefore(ultimoSlide, carrousel.childNodes[0]);
    carrousel.style.transition = 'unset';
    carrousel.style.marginright = 0;
    }, 500)
})