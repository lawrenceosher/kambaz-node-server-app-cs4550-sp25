import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    availableFromDate: Date,
    availableUntilDate: Date,
    dueDate: Date,
    points: Number,
  },
  { collection: "assignments" }
);

export default schema;
