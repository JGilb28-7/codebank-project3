
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/codebank")
    .then(() => console.log("Mongodb connection estrablished"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;