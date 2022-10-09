let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact
let Contact =require('../models/Contact');


/* GET Route for the Contact List page -Read operation */

router.get('/', (req, res, next) => {
Contact.find((err, ContactList)=>{
if(err)
{
    return console.error(err);
}
else{
   //console.log(ContactList);
   res.render('Contact', {title: 'Contact List', ContactList: ContactList })
 }
});
});
module.exports = router;
