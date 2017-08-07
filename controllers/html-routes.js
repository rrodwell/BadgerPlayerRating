/**
 * Created by ryanrodwell on 8/3/17.
 */
var express = require("express");
var router = express.Router();


router.get("/register", function(req,res){
    hsObj = {
        title: "Badger Player Rating | Register"
    };
    res.render("register", hsObj);
});


// Export routes for server.js to use.
module.exports = router;