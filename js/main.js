let starts = document.getElementById("starts");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");


window.addEventListener("scroll", function(){
    let value = window.scrollY;
    starts.style.left = value *0.25 + "px";
    moon.style.top = value *1.05 + "px";
    mountains_behind.style.top = value *0.5 + "px"
    mountains_front.style.top = value *0 + "px"
    text.style.marginRight = value *4+ "px"
    text.style.marginTop = value *1.5 + "px"
    btn.style.marginTop = value *1.5 + "px"
})

//menu responsive
const menu = document.getElementById("nav__menu");
const nav = document.getElementById("hero__nav");

menu.addEventListener("click", function(){
    nav.classList.toggle("nav__show")
    console.log("click")
})

// var config = {
//     reset: true, // Al desplazar el mouse, el interruptor de animación (el valor predeterminado es falso sin activar el interruptor de animación para el desplazamiento del mouse)
//              origin: 'right', // la dirección donde comienza la animación
//              duración: 500, // duración de la animación
//              retraso: 0, // retraso
//              rotar: {x: 0, y: 0, z: 0}, // ángulo inicial de transición a 0
//              opacidad: 0.2, // transparencia inicial (el efecto de 0,2 a 1)
//              escala: 2, // Zoom
//              easing: 'easy-in-out', // efecto de animación // easing'ease ',' easy-in-out ',' linear '...
//              // Llamar de vuelta 
//              // Se activará antes de que comience la animación
//     beforeReveal: function(domEl){
//                      console.log ('Animación ejecutada');
//     },
//              // Se activará antes de que la rueda del mouse se desplace
//     beforeReset: function(domEl){
//                      console.log ('La rueda arranca ---');
//     },
//              // Se activará después de que comience la animación
//     afterReveal: function(domEl){
//                      console.log ('La animación ha terminado');
//     },
//              // Se activará después de que se desplace la rueda de desplazamiento
//     afterReset: function(domEl){
//                      console.log ('La rueda se acabó');
//     }
// };

window.sr = ScrollReveal();

sr.reveal('.skill__img', {
    duration: 3000
});