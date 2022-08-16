const express = require("express")
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const db = require("./db/db.js")
const routes = require("./config/routes.js")

//BodyParser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//EJS
app.set("view engine", "ejs");

//Arquivos estaticos
app.use(express.static("public"));

//Database
db.authenticate().then(()=>{
    console.log("Conexão feita com sucesso");
}).catch(err =>{
    console.log(err);
})

//Rotas
app.use('/', routes);



app.listen(port,()=>{
    console.log("Server rodando");
})