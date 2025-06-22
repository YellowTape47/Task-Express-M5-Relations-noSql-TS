import { Request, Response } from "express";
import Author from "../models/Author";

const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const Authors = await Author.find().populate("posts", "title");
    res.status(200).json(Authors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching author" });
  }
};

const createAuthor = async (req: Request, res: Response) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: "Error creating Author" });
  }
};

export { getAllAuthors, createAuthor };
