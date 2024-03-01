const express = require('express')
const consign = require('consign')
const db = require('./config/db.js')
const app = express()
const mongoose = require('mongoose')

require('./config/mongodb.js')

app.db = db
app.mongoose = mongoose

consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./schedule')
.then('./config/routes.js')
.into(app)



app.listen(3003, () => {
    console.log('Back End Runnning')
})
