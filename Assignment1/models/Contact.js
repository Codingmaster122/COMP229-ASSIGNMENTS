let mongoose = require ('mongoose');


// create a model class 
let ContactModel = mongoose.Schema ({
username: String,
password: String,
email: String
},
{
    collection: "Contact"

});

module.exports = mongoose.model('Contact', ContactModel);