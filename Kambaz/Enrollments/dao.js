import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  return { _id: uuidv4(), user: userId, course: courseId };
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (e) => e.course !== courseId && e.user !== userId
  );
}

export function getEnrollmentsForUser(userId) {
  return Database.enrollments.filter(e => e.user === userId);
}
