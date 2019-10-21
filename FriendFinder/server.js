var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require("./app/data/friends.js")(app);

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
<<<<<<< HEAD
//require("./app/data/friends.js")(app);
=======
>>>>>>> 5da9fca25e5d6f316ebc9aa04666516f7d6cc0fb

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});