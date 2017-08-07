var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    // tokenSecret = require("./tokensecret.js"),
    // cookieParser = require("cookie-parser");
    mongoose = require("mongoose");


var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // Cookie-parser; secret for cookie parser  is different for jwt token secret
// app.use(cookieParser(tokenSecret));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// // MongoDB Configuration configuration
// mongoose.connect("mongodb://localhost/BadgerNation");
// var mongodb = mongoose.connection;
//
// mongodb.on("error", function(err) {
//     console.log("Mongoose Error: ", err);
// });
//
// mongodb.once("open", function() {
//     console.log("Mongoose connection successful.");
// });


//Firebase Configuration and Connection
var admin = require("firebase-admin");
var firebaseConfig = require("./config/firebaseConfig");

var serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebaseConfig.databaseURL
});

// // Import routes and give the server access to them.
// var authRoutes = require("./controllers/auth-routes.js");
// var apiRoutes = require("./controllers/api-routes.js");
// var userRoutes = require("./controllers/user-routes.js");

// // AUTH MIDDLEWARE
// app.use("/auth", authRoutes);
// app.use("/auth", express.static("./public"));
//
// // API MIDDLEWARE
// // app.use("/api", jwtExp({ secret: tokenSecret }));
// app.use("/api", apiRoutes);
//
// // USER MIDDLEWARE
// app.get("/", jwtExp({
//     secret: tokenSecret,
//     getToken: function fromCookie(req) {
//         if (req.signedCookies) {
//             return req.signedCookies.jwtAuthToken;
//         }
//         return null;
//     },
//     credentialsRequired: false
// }), function(req, res, next) {
//     if (req.user) {
//         next();
//     } else {
//         res.redirect("/auth/login");
//     }
// });

// Import routes and give the server access to them.
var routes = require("./controllers/html-routes.js");
app.use("/", routes);

app.use(express.static("./public"));

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Node app is running on port " + PORT);
    });
});