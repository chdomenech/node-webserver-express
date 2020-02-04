const hbs = require('hbs');

//un helper es una funcion que se dispara cuando el template lo requiere
//helpers
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();

});

//Otro helper para crear letra capitalizada
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(" ");
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});