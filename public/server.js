//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//IDIOMAS

const nombrePagina = 'Mexiwear - Playeras';
const namePage = 'Mexiwear - T-shirts';

const visionEng = "To be an international company committed to the development of high quality clothing and consolidating stable relationships with our suppliers and customers.";

app.set('view engine', 'ejs');

// app.get("/", function (req, res){

//     var year = new Date().getFullYear();

//     res.render("base", {actualYear: year} )
//     // res.sendFile(__dirname + '/index.html');
// });

app.get("/", function (req, res){
    res.render('index');
});

app.get("/index-en", function (req, res){
    res.render('index-en');
});

app.get("/completo", function (req, res){
    res.render('completo');
});
app.get("/full-package", function (req, res){
    res.render('full-package');
});

app.get("/maquilado", function (req, res){
    res.render('maquilado');
});
app.listen(3000, function(){
    console.log('Server port: 3000');
});

