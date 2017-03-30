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
	//render envia un objeto con datos que pueden ser
	//mostrados en dicha pagina parecido a RoR
	respuesta.render('formulario.ejs', {'tareas': tareas})
	console.log(tareas)
})
//-----------------------------------------------------------

//-----------------------------------------------------------
var tareas = []; //array que va a contener las tareas

//para recibir los datos por post se configura
app.post('/adicionar', function(llamado, respuesta){
	//guarda el dato de la tarea
	var tarea = llamado.body.nuevaTarea;
	//guarda la tarea en el array
	tareas.push(tarea)
	//redirecciona al formulario.ejs
	respuesta.redirect('/')
})

//para eliminar los datos se configura la peticion
app.get("/borrar/:id", function(llamado, respuesta){
	//retira la tarea del array con el metodo splice
	//javascript
	tareas.splice(llamado.params.id, 1)
	respuesta.redirect('/')
})
//-----------------------------------------------------------

//-----------------------------------------------------------
//luego se empieza a correr la app con listen
app.listen(3000, function(){
	console.log("Server en localhost:3000")
})
//-----------------------------------------------------------
