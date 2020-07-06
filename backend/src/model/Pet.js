import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, required: true },
  description: { type: String },
  profilePic: { type: String, required: true }
}, {
  versionKey: false
});

const Pet = mongoose.model("Pet", schema);

export default Pet;