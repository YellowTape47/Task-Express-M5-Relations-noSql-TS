import { Request, Response } from "express";
import Tag from "../models/Tag";
import Author from "../models/Author";

const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find().populate("Author", "name");
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tags" });
  }
};

// many tag to one author
const createTag = async (req: Request, res: Response) => {
  try {
    const { title, body, authorId } = req.body; // this is the body of your req from tagman or frontend
    const tag = await Tag.create({ title, body, author: authorId }); // apart from creating the tag also assigning author with auuthor id
    const addAuthor = await Author.findByIdAndUpdate(authorId, {
      tags: tag._id,
    }); // added the tagId to the auther with the author id
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error creating tag" });
  }
};

export { createTag, getAllTags };
