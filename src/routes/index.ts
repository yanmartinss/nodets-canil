import express from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = express.Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishs", PageController.fishs);

router.get("/search", SearchController.search);

export default router;
