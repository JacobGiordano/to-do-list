import makeNewEl from "./makeNewEl";
import taskUI from "./taskUI";
import Task from "./Task";
import data from "./data";
import ui from "./UI";
import { v4 as uuidv4 } from 'uuid';

const pageContent = document.getElementById("content");

const projUI = {
  populateProjects(allProjectData) {
    for (const project of allProjectData) {
      const newProjEl = this.addProjToDOM(project, false);
      if (project.expanded) {
        newProjEl.classList.add("expanded");
        newProjEl.querySelector(".project__expand-toggle-btn").textContent = "expand_less"
      }
      if (project.tasks.length > 0) {
        for (const task of project.tasks) {
          taskUI.addTaskToProjDOM(task, newProjEl, false);
        }
      }
      newProjEl.querySelector(".project__completed-count").textContent = project.tasks.filter(task => task.checked === true).length;
      newProjEl.querySelector(".project__total-task-count").textContent = project.tasks.length;
    }
  },
  addProjToDOM(newProj, autoFocusBool) {
    const newProjEl = this.createProjectEl(newProj);
    pageContent.appendChild(newProjEl);
    newProjEl.querySelector(".project__add-task-btn").addEventListener("click", e => {
      const newTask = new Task(uuidv4());
      taskUI.addTaskToProj(newTask, e.target.closest(".project"), true);
      // console.log(newTask);
    }, false);
    if (newProj.tasks.length === 0) {
      const noTaskMsg = makeNewEl("span", "no-tasks-msg", "This project is empty. Add a task to get started.", "");
      newProjEl.appendChild(noTaskMsg);
    }
    projUI.addProjToNav(newProj);
    autoFocusBool ? newProjEl.querySelector(".project__title").focus() : null;
    return newProjEl;
  },
  addProjToNav(newProj) {
    const navProjectsUl = document.getElementById("nav-projects");
    const newLi = makeNewEl("li", "nav__li", "", "");
    const visibilityIcon = makeNewEl("span", "nav__visibility-icon material-icons-outlined", "visibility", "");
    const projHiddenLabel = makeNewEl("label", "nav__project-hidden-label", "Project title", {
      "for": `project-${newProj.id}`
    });
    const projTitleEl = makeNewEl("input", "nav__project-title", `${newProj.title}`, {
      "type": "text",
      "name": `project-${newProj.id}`,
      "placeholder": "Project Title",
      "data-project-id": newProj.id,
      "data-project-title": newProj.title
    });
    
    newLi.appendChild(projHiddenLabel);
    newLi.appendChild(projTitleEl);
    newLi.appendChild(visibilityIcon);
    navProjectsUl.appendChild(newLi);

    projTitleEl.addEventListener("keyup", e => {
      const refId = e.target.getAttribute("data-project-id");
      const content = document.getElementById("content");
      const project = content.querySelector(`[data-project-id='${refId}']`);
      project.querySelector(".project__title").value = e.target.value;
      projUI.updateProjDataFromNav(project);
    }, false);
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
    const projHeaderRightInner = makeNewEl("div", "project__inner-btn-wrapper", "", "");
    const expandToggle = makeNewEl("button", "project__expand-toggle-btn material-icons", "expand_more", {
      "type": "button",
      "title": "Expand/collapse project"
    });
    const newTaskBtn = makeNewEl("button", "project__add-task-btn material-icons", "add", {
      "type": "button",
      "title": "Add new task"
    });
    const deleteProjectBtn = makeNewEl("button", "project__delete-project-btn material-icons", "delete_outline", {
      "type": "button",
      "title": "Delete project"
    });
    projHeader.appendChild(projectTitle);
    completedCounter.appendChild(completedCount);
    completedCounter.appendChild(completedDivider);
    completedCounter.appendChild(taskTotal);
    completedCounter.appendChild(completedText);
    projHeaderRight.appendChild(completedCounter);
    projHeaderRightInner.appendChild(expandToggle);
    projHeaderRightInner.appendChild(newTaskBtn);
    projHeaderRightInner.appendChild(deleteProjectBtn);
    projHeaderRight.appendChild(projHeaderRightInner);
    projHeader.appendChild(projHeaderRight);
    projectEl.appendChild(projHeader);

    // ADD PROJECT EVENT LISTENERS
    projectTitle.addEventListener("keyup", e => {
      projUI.handleProjKeyUp(e);
    }, false);
    expandToggle.addEventListener("click", e => {
      projUI.handleExpandToggleClick(e);
    }, false);
    projectEl.addEventListener("click", e => {
      e.target !== expandToggle && e.target.classList.contains("project") ? projUI.handleExpandToggleClick(e) : null;
    }, false);
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
  updateProjDataFromNav(projectEl) {
    let basicInfoObj = {};
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
      const height = `${element.clientHeight}px`;
      return height;
    };

    const height = getHeight();
    element.classList.add("expanded");
    element.querySelector(".project__expand-toggle-btn").textContent = "expand_less";
    element.style.height = height;

    window.setTimeout(() => {
      element.style.height = "";
    }, 100);
  },
  collapseProj(element) {
    element.style.height = `${element.scrollHeight - 32}px`;
    window.setTimeout(() => {
      document.body.clientWidth >= 480 ? element.style.height = "5rem" : element.style.height = "7rem";
    }, 100);
    window.setTimeout(() => {
      element.classList.remove("expanded");
      element.querySelector(".project__expand-toggle-btn").textContent = "expand_more";
    }, 100);
  },
  expandProjToggle(e) {
    const element = e.target.closest(".project");
    element.classList.contains("expanded") ? this.collapseProj(element) : this.expandProj(element);
  },
  clearProjStyles() {
    const projects = document.querySelectorAll(".project");
    for (const project of projects) {
      project.style = "";
    }
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