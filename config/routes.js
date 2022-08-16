const express = require("express")
const router = express.Router()
const bodyparser = require("body-parser")
const db = require("../db/db")
const users = require("../db/modelUser")

router.get("/",(req,res)=>{
   users.findAll({raw: true}).then(users =>{
        res.render("index",{
            users: users
        })
    })
})

router.get("/cadastrarUser",(req,res)=>{
    res.render("criarUser")
})

router.post("/salvarUser",(req,res)=>{
    var {nome, email, idade} = req.body
    if(nome == undefined || nome == "" || email == undefined || email == "" || idade == undefined  || idade == ""){
        res.redirect("/cadastrarUser")
    } else{
        if(idade < 0){
            res.redirect("/cadastrarUser")
        } else{
            users.create({
                nome: nome,
                email: email,
                idade: idade
            }).then(
                res.redirect("/"),
                res.status(200)
            )
        }
    
}
})
router.get("/editarUser/:id",(req,res)=>{
    var id = req.params.id
    if(isNaN(id)){
        res.redirect("/")
    }
    users.findByPk(id).then(user=>{
        if(user !=undefined){
            res.render("editarUser",{
                user: user
            })
        }else{
            res.redirect("/")
        }
    }).catch(err =>{
        res.redirect("/")
    })
})
router.post("/salvarEdicao",(req,res)=>{
    var {nome,email,idade,id} = req.body

    users.update({
        nome: nome,
        email: email,
        idade: idade
    },{
        where: {
            id: id
        }
    }).then(
        res.redirect("/")
    )
})
router.get("/informacoesUser/:id",(req,res)=>{
    var id = req.params.id
    if(id != undefined){
        users.findOne({
            where:{
                id : id
            }
        }).then(user =>{
            res.render("infoUser",{
                users: user
            })
        })

    
    }else{
        res.redirect("/")
    }
})




router.post("/deletarUser",(req,res)=>{
    var id = req.body.id
    if(id != undefined){
        if(!isNaN(id)){
            users.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                res.redirect("/")
            })
        } else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
})

module.exports = router