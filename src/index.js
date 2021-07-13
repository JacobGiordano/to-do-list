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
  newProj.title = "To-Do List Introduction";

  const taskList = ["Hello and welcome! 👋  To get started, let's update this project's title.", "Just click 'To-Do List Introduction' up above 👆  and start typing. 🙂", "As we go down the list, be sure to click the circles to the left. 👈", "Expand/collapse a project by clicking its edges, between tasks, or the down arrow in its header", "Let's try adding a new task. Click the + in this project's header.", "Now, update the new task's title", "Click this text, then scroll right.    ➡    👉    👉    👉    👉    ➡    👉    👉    👉    👉    ➡    👉    👉    👉    👉    Ta-da!  🎉  Scrollable task titles!", "Ok, to edit a task, click the 3 dots to the right", "You can change the priority of a task by clicking the 'Set priority' button in its options, or by clicking the thin gray bar to the right of a task's checkmark", "Go ahead and add some notes to a task", "Great! Now delete a task by clicking its trash can", "You quickly add a new project by just clicking the + in the lower-right ↘️", "Almost done!, go ahead and delete the new project by clicking the trash can in its header", "Lastly, open the menu by clicking the menu icon in the upper-left ↖️, and play with the options", "That's it! I hope you enjoy using To-Do List"];
  for (let i=0; i < taskList.length; i++) {
    const newTask = new Task(uuidv4());
    newTask.text = taskList[i];
    newProj.tasks.push(newTask);
  }

  data.addProjData(newProj);
  projUI.populateProjects(data.getData());
}