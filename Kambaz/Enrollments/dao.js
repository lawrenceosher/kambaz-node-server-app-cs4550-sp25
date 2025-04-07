import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments
    .filter((e) => e.user !== null)
    .map((enrollment) => enrollment.user);
}

export async function enrollUserInCourse(user, course) {
  return await model.create({ user, course, _id: `${user}-${course}` });
}

export async function unenrollUserFromCourse(user, course) {
  return await model.deleteOne({ user, course });
}
