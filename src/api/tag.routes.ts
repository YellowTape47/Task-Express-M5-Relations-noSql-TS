import express from "express";
import { createTag, getAllTags } from "./tag.controller";

const router = express.Router();

router.get("/", getAllTags);
router.post("/:postId/:tagId", createTag);

export default router;
