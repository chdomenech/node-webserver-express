const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Los parciales son un bloque de codigo html que podemos reutilizar
//__dirname es la ruta que contiene los archivos del directorio
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Christian Domenech'
    });
})

//Creo otro path por cada pagina que cree
app.get('/about', (req, res) => {
    res.render('about');
})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});