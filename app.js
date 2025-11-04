const express = require ("express");

const app = express();
const port = 3000;

//Rutas 
app.get("/" , (req, res) => {
    res.redirect("juego.html");
});

//Rutas estáticas
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Server escuchando en el puerto " + port);
});