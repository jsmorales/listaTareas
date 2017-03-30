//Acá es donde se escribe nuestra aplicación
//Se hace la inclusion de los modulos necesarios
//-----------------------------------------------------------
var express = require('express')
var bodyParser = require('body-parser')
var session = require('cookie-session')
//-----------------------------------------------------------

//-----------------------------------------------------------
//se inicializa la aplicacion en una variable llamada app
//la cual es el server como tal
var app = express();
//-----------------------------------------------------------

//-----------------------------------------------------------
//para poder guardar la info en nuestra app se usa session
//la cual se escribe asi:
app.use(session({secret:'nodejs'}))
//secret es por seguridad
//-----------------------------------------------------------

//-----------------------------------------------------------
//para poder recibir datos en evento POST se usa el bodyParser
//y no es de tipo extendido, esto es solo para forms anidados
app.use(bodyParser.urlencoded({extended:false}))
//-----------------------------------------------------------

//-----------------------------------------------------------
//para las vistas se usa ejs, el cual se setea asi
app.set('view engine', 'ejs')
//-----------------------------------------------------------

//-----------------------------------------------------------
//para servir las paginas 
//home
app.get('/', function(llamado, respuesta){
	respuesta.render('formulario.ejs', {})
})
//-----------------------------------------------------------

//-----------------------------------------------------------
//luego se empieza a correr la app con listen
app.listen(3000, function(){
	console.log("Server en localhost:3000")
})
//-----------------------------------------------------------
