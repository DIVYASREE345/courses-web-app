'use strict'

const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const config = require('../config');
const DATA_DIR = path.join(__dirname, '..', 'data', 'courses.json');

function validateCourse(course) {
  const schema = Joi.object({
    course: Joi.string().min(3).required(),
    duration: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validate(course);
}

const controllers = {
  hello: (req, res) => {
    res.json({ api: 'courses!' });
  },
  getCourses: (req, res) => {
    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        console.log(err);
      }
      const courses = JSON.parse(data);

      res.send(courses);
    });
  },
  getSingleCourse: (req, res) => {
    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
      const courses = JSON.parse(data);
      const course = courses.find((c) => c.id === parseInt(req.params.id));
      // If course doesn't exist return 404: Not Found
      if (!course) return res.status(404).send("The course was not found");

      res.send(course);
    });
  },
  putCourse: (req, res) => {
    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        console.error(err);
      }
      const courses = JSON.parse(data);
      const updateCourse = courses.find(
        (c) => c.id === parseInt(req.params.id)
      );
      if (!updateCourse)
        return res
          .status(404)
          .send("The course with the given ID was not found"); //404 (object not found)

      //validate
      //If invalid, return 400 - Bad request
      const { error } = validateCourse(req.body); // result.error
      if (error) return res.status(400).send(error.details[0].message);

      //Update course
      updateCourse.course = req.body.course;
      updateCourse.duration = req.body.duration;
      updateCourse.description = req.body.description;
      res.send(updateCourse); //Return the update course
      const updatedCourses = JSON.stringify(courses, null, 2);
      fs.writeFile("./data/courses.json", updatedCourses, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
    });
  },
  deleteCourse: (req, res) => {
    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        console.error(err);
      }
      const courses = JSON.parse(data);
      const course = courses.find((c) => c.id === parseInt(req.params.id));
      // If course doesn't exist return 404: Not Found
      if (!course) return res.status(404).send("The course was not found");
      // delete course
      const index = courses.indexOf(course);
      courses.splice(index, 1);

      //response to clint
      res.send(course);

      const updatedCourses = JSON.stringify(courses, null, 2);
      fs.writeFile("./data/courses.json", updatedCourses, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
    });
  },
  postCourse: (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      const dataFromJson = JSON.parse(data);

      const course = {
        id: Date.now(),
        course: req.body.course,
        duration: req.body.duration,
        description: req.body.description,
      };

      dataFromJson.push(course);

      const jsonData = JSON.stringify(dataFromJson, null, 4);

      fs.writeFile("./data/courses.json", jsonData, (err) => {
        if (err) return res.status(500).send(err.message);

        res.status(201).send(course);
      });
    });
  }
};

module.exports = controllers;
