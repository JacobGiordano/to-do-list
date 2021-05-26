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
      project.expanded ? newProjEl.classList.add("expanded") : null;
      if (project.tasks.length > 0) {
        for (const task of project.tasks) {
          taskUI.addTaskToProjDOM(task, newProjEl);
        }
      } else {
        const noTaskMsg = makeNewEl("span", "no-tasks-msg", "This project is empty. Add a task to get started.", "");
        newProjEl.appendChild(noTaskMsg);
      }
      newProjEl.querySelector(".project__completed-count").textContent = project.tasks.filter(task => task.checked === true).length;
      newProjEl.querySelector(".project__total-task-count").textContent = project.tasks.length;
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
    let projectEl = makeNewEl("div", `project ${newProj.expanded ? "expanded" : ""}`, "", {
      "data-project-id": newProj.id,
      "data-project-title": newProj.title
    });
    const projHeader = makeNewEl("div", "project__header", "", "");
    const projectTitle = makeNewEl("input", "project__title", newProj.title, {
      "type": "text",
      "placeholder": "Project Title"
    });
    const projHeaderRight = makeNewEl("div", "project__btn-wrapper", "", "");
    const completedCounter = makeNewEl("div", "project__completed-counter", "", "");
    const completedCount = makeNewEl("span", "project__completed-count", "0", "");
    const completedDivider = makeNewEl("span", "project__completed-count-divider", " of ", "");
    const completedText = makeNewEl("span", "project__completed-text", " completed", "");
    const taskTotal = makeNewEl("span", "project__total-task-count", "0", "");
    const expandToggle = makeNewEl("button", "project__expand-toggle-btn", "Expand Toggle", {
      "type": "button"
    });
    const newTaskBtn = makeNewEl("button", "project__add-task-btn", "Add Task", {
      "type": "button"
    });
    const deleteProjectBtn = makeNewEl("button", "project__delete-project-btn", "Delete Project", {
      "type": "button"
    });
    projHeader.appendChild(projectTitle);
    completedCounter.appendChild(completedCount);
    completedCounter.appendChild(completedDivider);
    completedCounter.appendChild(taskTotal);
    completedCounter.appendChild(completedText);
    projHeaderRight.appendChild(completedCounter);
    projHeaderRight.appendChild(expandToggle);
    projHeaderRight.appendChild(newTaskBtn);
    projHeaderRight.appendChild(deleteProjectBtn);
    projHeader.appendChild(projHeaderRight);
    projectEl.appendChild(projHeader);

    // ADD PROJECT EVENT LISTENERS
    projectTitle.addEventListener("keyup", e => {
      projUI.handleProjKeyUp(e);
    }, false);
    expandToggle.addEventListener("click", e => {
      projUI.handleExpandToggleClick(e);
    })
    deleteProjectBtn.addEventListener("click", e => {
      projUI.handleProjDeleteClick(e);
    }, false);

    return projectEl;
  },
  updateCompletedTaskTotals(parentProj, numOfTotalTasks, numOfCompletedTasks) {
    const completedNumEl = parentProj.querySelector(".project__completed-count");
    const totalTaslNumEl = parentProj.querySelector(".project__total-task-count");
    completedNumEl.textContent = numOfCompletedTasks;
    totalTaslNumEl.textContent = numOfTotalTasks;
  },
  updateProjData(e) {
    let basicInfoObj = {};
    const projectEl = e.target.closest(".project");
    const projectTitle = projectEl.querySelector(".project__title").value;
    const parentProjectId = projectEl.getAttribute("data-project-id");

    basicInfoObj.id = parentProjectId;
    basicInfoObj.title = projectTitle;
    basicInfoObj.expanded = projectEl.classList.contains("expanded");
    basicInfoObj.visible = !projectEl.classList.contains("hide");
    console.log(basicInfoObj);
    data.updateBasicProjState(basicInfoObj);
  },
  expandProj(element) {
    const getHeight = () => {
      const height = `${element.scrollHeight}px`;
      return height;
    };

    const height = getHeight();
    element.classList.add("expanded");
    element.style.height = height;

    window.setTimeout(() => {
      element.style.height = "";
    }, 100);
  },
  collapseProj(element) {
    element.style.height = `${element.scrollHeight}px`;
    window.setTimeout(() => {
      element.style.height = "1.5rem";
    }, 100);
    window.setTimeout(() => {
      element.classList.remove("expanded");
    }, 100);
  },
  expandProjToggle(e) {
    const element = e.target.closest(".project");
    element.classList.contains("expanded") ? this.collapseProj(element) : this.expandProj(element);
    // projUI.updateProjData(e);
  },
  handleExpandToggleClick(e) {
    projUI.expandProjToggle(e);
    timer = window.setTimeout(() => {
      projUI.updateProjData(e);
    }, timeoutVal);
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
      projUI.updateProjData(e);
    }, timeoutVal);
  }
};

let timer;
const timeoutVal = 750;

export default projUI;