import express from "express";
import connectDB from "./database";
import postsRouter from "./api/posts.routers";
import notFound from "./middlewares/NotFound";
import errorHandler from "./middlewares/ErrorHandler";
import authorRouter from "./api/authors.routes";
import tagRouter from "./api/tag.routes";
const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/author", authorRouter);
app.use("/tag", tagRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
