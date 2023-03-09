const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Contact = new Schema({
    fullname : String ,
    phone : Number 
})


module.exports = Contact = mongoose.model('contacts',Contact);