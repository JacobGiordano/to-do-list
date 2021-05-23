import data from "./data";
import Project from "./Project";
import Task from "./Task";
import projUI from "./projectUI";
import { v4 as uuidv4 } from 'uuid';

let storedData = data.getData();
if (JSON.parse(localStorage.getItem("to-do-data")) !== null && storedData.length !== 0) {
  projUI.populateProjects(data.getData());
} else {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  newProj.title = "Starter Project";

  const taskList = ["Update the project title", "Add a new task", "Update a task's information", "Delete a task", "Add a new project", "Delete a project"];
  for (let i=0; i < taskList.length; i++) {
    const newTask = new Task(uuidv4());
    newTask.text = taskList[i];
    newProj.tasks.push(newTask);
  }

  data.addProjData(newProj);
  projUI.populateProjects(data.getData());
}