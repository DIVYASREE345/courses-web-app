const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.hello);

router.get("/courses", controllers.getCourses);

router.get("/courses/:id", controllers.getSingleCourse);

router.put("/courses/:id", controllers.putCourse);

router.delete("/courses/:id", controllers.deleteCourse);

router.post("/courses", controllers.postCourse);


module.exports = router;
