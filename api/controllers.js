'use strict'

const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const config = require('../config');
const DATA_DIR = path.join(__dirname, '..', 'data', 'courses.json');

const controllers = {
  hello: (req, res) => {
    res.json({ api: 'courses!' });
  },

  update: (req, res) => {
    fs.readFile("./data/courses.json", (err, data) => {
      if (err) {
        console.error(err);
      }
      const courses = JSON.parse(data);
      const updateCourse = courses.find((c) => c.id === parseInt(req.params.id));
      if (!updateCourse)
        return res.status(404).send("The course with the given ID was not found"); //404 (object not found)
  
      //validate
      //If invalid, return 400 - Bad request
      const { error } = validateCourse(req.body); // result.error
      if (error) return res.status(400).send(error.details[0].message);
  
      //Update course
      updateCourse.course = req.body.course;
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

};
module.exports = controllers;
