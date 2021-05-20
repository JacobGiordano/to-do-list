import makeNewEl from "./makeNewEl";
import taskUI from "./taskUI";
import Task from "./Task";
import data from "./data";
import ui from "./UI";
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
      "data-project-title": newProj.title
    });
    const projectTitle = makeNewEl("input", "project__title", newProj.title, {
      "type": "text",
      "placeholder": "Project title"
    });
    const newTaskBtn = makeNewEl("button", "project__add-task-btn", "Add Task", {
      "type": "button"
    });
    const deleteProjectBtn = makeNewEl("button", "project__delete-project-btn", "Delete Project", {
      "type": "button"
    });
    projectEl.appendChild(projectTitle);
    projectEl.appendChild(newTaskBtn);
    projectEl.appendChild(deleteProjectBtn);

    // ADD PROJECT EVENT LISTENERS
    projectTitle.addEventListener("keyup", function(e) {
      projUI.handleProjKeyUp(e);
    }, false);
    deleteProjectBtn.addEventListener("click", function(e) {
      projUI.handleProjDeleteClick(e);
    }, false);

    return projectEl;
  },
  handleProjDeleteClick(e) {
    if (confirm("Delete project?")) {
      const projectEl = e.target.closest(".project");
      const projectElId = projectEl.getAttribute("data-project-id");
      
      data.deleteProjData(projectElId);
      projectEl.remove();
    }
  },
  handleProjKeyUp(e) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      const projectTitleEl = e.target;
      // console.log(projectTitle);
      const parentProjectId = projectTitleEl.closest(".project").getAttribute("data-project-id");
      const projectTitle = projectTitleEl.value;
      // console.log(parentProjectId);
        data.updateProjectDataTitle(projectTitle, parentProjectId);
    }, timeoutVal);
  }
};

let timer;
const timeoutVal = 750;

export default projUI;