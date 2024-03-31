const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/get-all", ProductController.getAllProduct);
router.post("/create", ProductController.createProduct);
router.put("/update/:id", ProductController.updateProduct);
router.get("/get-details/:id", ProductController.getDetailsProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
