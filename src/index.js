import data from "./data";
import Project from "./Project";
import Task from "./Task";
import settings from "./settings";
import projUI from "./projectUI";
import { v4 as uuidv4 } from 'uuid';

let storedData = data.getData();
if (JSON.parse(localStorage.getItem("to-do-data")) !== null && storedData.length !== 0) {
  projUI.populateProjects(data.getData());
} else {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  newProj.title = "Starter Project";

  const taskList = ["Update this project's title", "Add a new task to this project", "Change a task's title", "Click the 3 dots to the right to edit a task", "Change the priority of a task by clicking it","Add notes to a task", "Delete a task", "Add a new project by clicking the + in the upper-right", "Delete a project by clicking the trash can in the upper-right"];
  for (let i=0; i < taskList.length; i++) {
    const newTask = new Task(uuidv4());
    newTask.text = taskList[i];
    newProj.tasks.push(newTask);
  }

  data.addProjData(newProj);
  projUI.populateProjects(data.getData());
}