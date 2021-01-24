var express = require("express")
const model = require("../model/products")

var router = express.Router()

// const products = require("../products.json") // criado para chamar led tv etc 
// const router = express.Router()

router.get("/", function(req, res, next){
    // res.json("chegamos aqui e queremos continuar"+" força Ademir" + " vamos avante")
    // res.render("products") depois de colar o index no products ejs criei a linha abaixo
    res.render("products",{title: "Pagina do grande ADEMIR GONÇALVES", products: model.getProducts() }) // depois de criar um arquivo products.EJS EU CRIEI ESSA LINHA e lá so digitei um texto. 
}) 


console.log("arquivo rodando")

module.exports = router
