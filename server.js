const express = require("express");
const server = express();

const port = process.argv[2]; 

server.listen(port, function(){
    console.log("server listen on port " + port + "\n");
});

server.get("/*", function(req, res){
    res.send("Server is UP\nPort: " + port + "\n");
});