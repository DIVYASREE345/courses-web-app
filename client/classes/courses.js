'use strict';

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
        listItem.style.display='flex';
        listItem.style.justifyContent="space-between";
        listItem.style.alignItems="center";

        const title = document.createElement('h2');
        title.className = 'item-text-title';
        title.innerHTML = `${this.name}`;
        listItem.appendChild(title);

        const duration = document.createElement('h4');
        duration.className = 'item-duration';
        duration.innerHTML = `${this.duration}`;
        listItem.appendChild(duration);

        const description = document.createElement('h4');
        description.className = 'item-description';
        description.innerHTML = `${this.description}`;
        listItem.appendChild(description);


        const editButton = document.createElement("button");
        // editButton.className = 'item-text-title';
        editButton.innerHTML = `Edit`;
        listItem.appendChild(editButton);

        const deleteButton = document.createElement("button");
        //deleteButton.className = 'item-text-title';
        deleteButton.innerHTML = `Delete`;
        listItem.appendChild(deleteButton);
        

        return listItem;
    }
}