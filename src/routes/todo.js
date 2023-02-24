const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoController");


//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);

//post
router.post("/", controller.add);

//update
router.put("/:id", controller.update);

//delete
router.delete("/:id", controller.delete);

module.exports = router;