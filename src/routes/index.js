const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    console.log("Relou na tua bunda?");
    res.send("Relou sim 1.0 viado");
})

module.exports = router;