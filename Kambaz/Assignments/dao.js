import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function findAssignmentsForCourse(courseId) {
  return await model.find({ course: courseId });
}

export async function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return await model.create(newAssignment);
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return await model.updateOne({ _id: assignmentId }, assignmentUpdates);
}

export async function deleteAssignment(assignmentId) {
  return await model.deleteOne({ _id: assignmentId });
}
