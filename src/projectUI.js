import makeNewEl from "./makeNewEl";
import taskUI from "./taskUI";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

const projUI = {
  populateProjects(allProjectData) {
    for (const project of allProjectData) {
      const newProjEl = this.addProjToDOM(project);
      for (const task of project.tasks) {
        taskUI.addTaskToProjDOM(task, newProjEl);
      }
    }
  },
  addProjToDOM(newProj) {
    const newProjEl = this.createProjectEl(newProj);
    content.appendChild(newProjEl);
    newProjEl.querySelector(".project__add-task-btn").addEventListener("click", function(e) {
      const newTask = new Task(uuidv4());
      taskUI.addTaskToProj(newTask, e.target.closest(".project"));
      // console.log(newTask);
    }, false);
    return newProjEl;
  },
  createProjectEl(newProj) {
    // console.log(newProj);
    let projectEl = makeNewEl("div", "project", "", {
      "data-project-id": newProj.id,
      "data-project-name": newProj.name
    });
    const projectName = makeNewEl("input", "project__title", "New Project", {
      "type": "text",
      "placeholder": "Project name"
    });
    const newTaskBtn = makeNewEl("button", "project__add-task-btn", "Add Task", {
      "type": "button"
    });
    const deleteProjectBtn = makeNewEl("button", "project__delete-project-btn", "Delete Project", {
      "type": "button"
    });
    projectEl.appendChild(projectName);
    projectEl.appendChild(newTaskBtn);
    projectEl.appendChild(deleteProjectBtn);
    return projectEl;
  }
};

export default projUI;