"use strict";
import { Course } from "../classes/courses.js";
const mainDiv = document.querySelector(".items");
//const url = "http://localhost:8080";
let currentId;
export const getCourse = async () => {
  //e.preventDefault();
  const res = await fetch('/api/courses');
  const courses = await res.json();
  mainDiv.innerHTML = "";
  courses.map((course) => {
    let newCourse = new Course(
      course.id,
      course.course,
      course.duration,
      course.description
    );
    const courseRender = newCourse.render();
    mainDiv.appendChild(courseRender);
  });
};
document
  .getElementById("get-course")
  .addEventListener("click", () => getCourse());

const createCourse = async () => {
  //e.preventDefault();
  const courseName = document.getElementsByName("field1")[0].value;
  const courseDuration = document.getElementsByName("field2")[0].value;
  const courseDescription = document.getElementsByName("field6")[0].value;
  const newCourse = {
    course: courseName,
    duration: courseDuration,
    description: courseDescription,
  };
  await fetch('/api/courses', {
    method: "POST",
    body: JSON.stringify(newCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });
  
};

export const getSingleCourse = async (e, id) => {
  const res = await fetch(`/api/courses/${id}`);
  const course = await res.json();
  document.getElementsByName("field1")[0].value = course.course;
  document.getElementsByName("field2")[0].value = course.duration;
  document.getElementsByName("field6")[0].value = course.description;
  document.querySelectorAll("input[type=submit]")[0].value = "Update";
  currentId = id;
};
export const updateCourse = async (e, id) => {
  e.preventDefault();
  const courseName = document.getElementsByName("field1")[0].value;
  const courseDuration = document.getElementsByName("field2")[0].value;
  const courseDescription = document.getElementsByName("field6")[0].value;
  const newCourse = {
    course: courseName,
    duration: courseDuration,
    description: courseDescription,
  };
  await fetch(`/api/courses/${id}`, {
    method: "PUT",
    body: JSON.stringify(newCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const deleteCourse = async (e, id) => {
  e.preventDefault();
  await fetch(`/api/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const chooseMethod = (e) => {
  if (document.querySelectorAll("input[type=submit]")[0].value !== "Update") {
    alert("Course Created click Open course to see the new course ");
    createCourse(e);
  } else {
    alert("Course Updated click Open Course to see the updated course");
    updateCourse(e, currentId);
    window.location.reload();
  }
};
document
  .querySelectorAll("input[type=submit]")[0]
  .addEventListener("click", (e) => chooseMethod(e));
