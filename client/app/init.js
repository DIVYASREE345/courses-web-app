'use strict';

import { Course } from "../classes/courses.js";

const mainDiv = document.querySelector(".items");
const url = "http://localhost:8080";


const getCourse = async () => {
  const res = await fetch(`${url}/api/courses`);
  const courses = await res.json();

  mainDiv.innerHTML = '';

  courses.map((course) => {
    let newCourse = new Course(course.id, course.course, course.duration, course.description);
    
    const courseRender = newCourse.render();
    mainDiv.appendChild(courseRender);
  });
};

document.getElementById("get-course").addEventListener("click", () => getCourse());