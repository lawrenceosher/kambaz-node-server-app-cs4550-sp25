import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function updateModule(moduleId, moduleUpdates) {
  return await model.updateOne({ _id: moduleId }, moduleUpdates);
}

export async function deleteModule(moduleId) {
  return await model.deleteOne({ _id: moduleId });
}

export async function createModule(module) {
  const newModule = { ...module, _id: uuidv4() };
  return await model.create(newModule);
}

export async function findModulesForCourse(courseId) {
  return await model.find({ course: courseId });
}
