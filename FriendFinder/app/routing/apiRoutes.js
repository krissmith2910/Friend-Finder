module.exports = function(app){app.get("api/friends", function(req, res) {
    return res.json(friends);
  });}

  //app.post("/api/friends", function(req, res) {

    //var newCharacter = req.body;
  
   
   // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
   // console.log(newCharacter);
  
    //characters.push(newCharacter);
  
    //res.json(newCharacter);
 // });