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

const createCourse = async (e) => {
  e.preventDefault();
  const courseName = document.getElementsByName("field1")[0].value
  const courseDuration = document.getElementsByName("field2")[0].value
  const courseDescription = document.getElementsByName("field6")[0].value

  const newCourse = {
    course:courseName,
    duration:courseDuration,
    description:courseDescription
  }
  await fetch(`${url}/api/courses`,{
    method: "POST",
    body: JSON.stringify(newCourse),
    headers:{
      'Content-Type': 'application/json'
  }
  });
}

document.querySelectorAll("input[type=submit]")[0].addEventListener("click", (e) => createCourse(e));