const express = require("express")

const mi = express.Router()

router.get("/", function(req, res){
    res.json("chegamos aqui e queremos continuar"+" força Ademir mais um paço")
}) 


console.log("arquivo rodando")

module.exports = mi
