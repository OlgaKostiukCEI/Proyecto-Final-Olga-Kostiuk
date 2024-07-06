//parallax
let banner = document.querySelector('.banner')
let sonbreMi = document.querySelector('.seccion')

//variables de acordeon apartado experiencia
let bloque = document.querySelectorAll('.section__acordeon__bloque')
let h3 = document.querySelectorAll('.section__acordeon__bloque__h3')
let icon = document.querySelectorAll('.section__content__icon')

//variables de menú burger
let nav = document.querySelector('#nav')
let abrir = document.querySelector('#abrir')
let cerrar = document.querySelector('#cerrar')

//al hacer click se abre el menú
abrir.addEventListener ('click', () => {
    nav.classList.add('visible')
})

//al hacer click se cierra menú
cerrar.addEventListener ('click', () => {
    nav.classList.remove('visible')
})

//al hacer click a cada h3 se activa la clase con contenido
h3.forEach((cadaH3, i) => {
    h3[i].addEventListener('click', () => {
        // Verifica si el bloque ya está activo
        if (bloque[i].classList.contains('active')) {
            // Si está activo, lo cierra
            bloque[i].classList.remove('active');
            h3[i].classList.remove('click');
            icon [i].classList.remove('rotate')
        } else {
            // Si no está activo, cierra todos los bloques y abre el clicado
            bloque.forEach((cadaBloque, j) => {
                bloque[j].classList.remove('active');
                h3[j].classList.remove('click');
                icon [i].classList.remove('rotate')
            });
            bloque[i].classList.add('active');
            h3[i].classList.add('click');
            icon [i].classList.add('rotate')
        }
    });
});

//al hacer scroll el contenido se mueve
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset
    let speed = 0.3

    banner.style.transform = 'translateY('+scroll * speed+'px)'
})