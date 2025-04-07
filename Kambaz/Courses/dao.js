import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export async function findAllCourses() {
  return await model.find();
}

export async function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return await model.create(newCourse);
}

export async function deleteCourse(courseId) {
  return await model.deleteOne({ _id: courseId });
}

export async function updateCourse(courseId, courseUpdates) {
  return await model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
