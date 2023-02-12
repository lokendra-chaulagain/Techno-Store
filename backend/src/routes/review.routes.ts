import { Router } from "express";
import { getReviews, createReview, deleteReview } from "../controllers/review.controllers";
const router = Router();

router.get("/", getReviews);
router.post("/", createReview);
router.delete("/:id", deleteReview);

export default router;
