const sequelize = require("sequelize")
const connection = new sequelize("checklist","root","Joao9881",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection