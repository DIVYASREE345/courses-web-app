# Development Strategy

![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/DIVYASREE345/courses-web-app)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues-raw/DIVYASREE345/courses-web-app)
![Github All Contributors](https://img.shields.io/github/all-contributors/DIVYASREE345/courses-web-app/master)

> [courses-web-app](https://github.com/DIVYASREE345/courses-web-app)

Refactoring the project RESTFull API with client, server connection.
---


## Screenshot
<p align="center">
<img src="/planning/screenshot.PNG" alt="screenshot" with="600">
</p>

---

## 0.Setup

_A User can see the initial repository and live demo_

- create a repo using starter
- Add collaborators
- Set up a project board
- Start a development strategy.
- Create initial README file
- Create Group issue
- Turn on GitHub Pages

---

## 1. Data
- databas.JSON 
- contains course object.


---

## 2. Get a single course

> Assigned to _Divya_

**As a user I want to see the webpage up and accessable**

create a repository and turn on github pages.

**As a user I want to see a friedly interface to add, list or delete courses**

this part is create in `html-css` branch and merged to the `master`. 

**As a user I want to be able to create course with a specific course name**

This part is create in branch `post-course` and merged in the `master` when it was completed.

### Task C: JS

- add rout
- add controler

  - Validate the user input.
  - push the user input to the file content container
  - write the final changes to the database


## 3. Get All courses

> Assign to _Burak_

**As a site visitor, I want to see all courses list.**

This user story has been developed through a branch called `getCourse`.



### Node.js

- import express framework
- import fs module
- write logic to show all list.

## 4. Edit or update courses

> Assigned to _Sharaf_

**As a user I want to be able to edit a course.**

This part is create in `update` branch and merged in the `master` when completed.

### Task C: JS

- Add rout
- Add controller

  - Chek if the course exist with the given ID.
  - Validate the user input
  - Change the course name with the new course name
  - push the changes to the file content container
  - write the final changes to the database.

---
## 5. delete courses

> Assigned to _Tahmina_

**As a user I want to be able to delete a course.**

This part is create in `delete` branch and merged in the `master` when completed.

### Task C: JS

- Add rout.
- Add controller

  - Check if the course exist with the given ID
  - Delete the course with the given ID
  - push the changes to the file container.
  - write the final changes to the database.

---


## 6 Deployed to Heroku

> Assigned to _Tahmina_

**As a group website We want that the website should be accessible to all people around the world**

- This part is create in `deployment` branch and merged to the `master` when completed.

---
