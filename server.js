const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

//Express serializa por nosotros un 
//objeto a JSON
app.get('/data', (req, res) => {

    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.send(salida);
})

app.listen(8080, () => {
    console.log("Escuchando peticiones en el puerto 8080")
});