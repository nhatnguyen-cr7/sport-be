const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.post("/create", CategoryController.createCategory);
router.put(
  "/update/:id",
  // authMiddleWare,
  CategoryController.updateCategory
);
router.get("/get-details/:id", CategoryController.getDetailsCategory);
router.delete(
  "/delete/:id",
  // authMiddleWare,
  CategoryController.deleteCategory
);
router.get("/get-all", CategoryController.getAllCategory);

module.exports = router;
