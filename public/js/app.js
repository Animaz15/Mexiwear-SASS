// document.addEventListener('DOMContentLoaded', function(){
//     iniciarApp();
// });

// function iniciarApp() {
//     navegacionFija();
//     scrollNav();
//     idioma();
// }




// var check = document.querySelector('.check');
// check.addEventListener('click', idioma);

// function idioma () {
//     let id=check.checked;
//     if (id == true ) {
//         location.href='en/index.html'
//     } else {
//         location.href='../index.html'
//     }

//     console.log(check.checked);
// }

// function scrollNav (){
//     const enlaces = document.querySelectorAll('.homepage a');
//     enlaces.forEach( enlace => {
//         enlace.addEventListener('click', function(e){
//             e.preventDefault();

//             const seccionScroll = e.target.attributes.href.value;
//             const seccion = document.querySelector(seccionScroll);
//             seccion.scrollIntoView({behavior: "smooth"});
//         });
//     })
// }

// function navegacionFija(){
//     const barra = document.querySelector('.header');
//     const quienes = document.querySelector('#nosotros');
//     const body = document.querySelector('body');

//     window.addEventListener('scroll', function (){
       

//         if ( quienes.getBoundingClientRect().top < 0) {
//             barra.classList.add('fijo');
//             body.classList.add('body-scroll');
//         } else {
//             barra.classList.remove('fijo');
//             body.classList.remove('body-scroll');
//         }
//     })

// }
