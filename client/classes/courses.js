'use strict';
import {getSingleCourse, deleteCourse, getCourse} from '../app/init.js'
export class Course {
    constructor(id, name, duration, description){
        this.id = id,
        this.name = name,
        this.duration = duration,
        this.description= description
    }

    render(){

        const listItem = document.createElement("li");
        listItem.className = 'item';
        

        const title = document.createElement('h2');
        title.className = 'item-text-title';
        title.innerHTML = `${this.name}`;
        listItem.appendChild(title);

        

        const description = document.createElement('h4');
        description.className = 'item-description';
        description.innerHTML = `${this.description}`;
        listItem.appendChild(description);


        const editButton = document.createElement("div");
        editButton.classList.add('icon');
        editButton.innerHTML = `<i class="fas fa-edit"></i>`;
        editButton.addEventListener('click', (e)=>getSingleCourse(e, this.id))

        
        listItem.appendChild(editButton);

        
        
        const duration = document.createElement('h4');
        duration.className = 'item-duration';
        duration.innerHTML = `${this.duration} weeks`;
        listItem.appendChild(duration);

        const deleteButton = document.createElement("div");
        deleteButton.classList.add('icon');
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        deleteButton.addEventListener('click', (e) => deleteCourse(e, this.id))
        deleteButton.addEventListener('click', function()
        { 
            alert("Course Deleted");
         })
        deleteButton.addEventListener("click", () => getCourse());
        listItem.appendChild(deleteButton);
        return listItem;
    }
}