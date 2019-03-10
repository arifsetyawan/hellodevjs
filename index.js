const express = require('express')
const Sequelize = require('sequelize');
const app = express()
const port = 6969

// Connect to database
const sequelize = new Sequelize('learn', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

//routing
app.get('/', (req, res) => {
    const resData = User
        .all()
        .then((result) => {
            return res.json(result);
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))