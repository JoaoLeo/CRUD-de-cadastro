const sequelize = require("sequelize")
const connection = require("./db")


const users = connection.define("users",{
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.TEXT,
        allowNull: false
        
    },
    idade: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

users.sync({force: false}).then(()=>{})

module.exports = users