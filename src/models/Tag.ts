import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Tag = model("Tag", tagSchema);

export default Tag;
