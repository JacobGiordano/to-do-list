import Project from "./Project";
import Task from "./Task";
import data from "./dataManagement";
import makeNewEl from "./makeNewEl";
import { v4 as uuidv4 } from 'uuid';

const populateProjects = allProjectData => {
  for (const project of allProjectData) {
    const newProjEl = addProjToDOM(project);
    for (const task of project.tasks) {
      addTaskToProjDOM(task, newProjEl);
    }
  }
}

const createProjectEl = newProj => {
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

const createTaskEl = newTask => {
  const task = makeNewEl("div", "task", "", {
    "data-task-id": newTask.id
  });
  const topWrapper = makeNewEl("div", "task__top-wrapper", "", "");
  const checkBox = makeNewEl("input", "task__checkbox", "", {
    "type": "checkbox"
  });
  const colorPriority = makeNewEl("button", `task__color-priority priority-${newTask.color}`, "", {
    "type": "button",
    "data-color": newTask.color
  });
  const input = makeNewEl("input", "task__text-input", "", {
    "type": "text",
    "placeholder": "New Task"
  });
  const dueDate = makeNewEl("input", "task__due-date", "", {
    "type": "date"
  });
  const deleteBtn = makeNewEl("button", "task__delete-btn", "delete", {
    "type": "button"
  });
  const bottomWrapper = makeNewEl("div", "task__bottom-wrapper", "", "");
  const notes = makeNewEl("textarea", "task__notes", "", {
    "placeholder": "Notes"
  });

  topWrapper.appendChild(checkBox);
  topWrapper.appendChild(colorPriority);
  topWrapper.appendChild(input);
  topWrapper.appendChild(dueDate);
  topWrapper.appendChild(deleteBtn);
  bottomWrapper.appendChild(notes);
  task.appendChild(topWrapper);
  task.appendChild(bottomWrapper);

  // ADD EVENT LISTENERS HERE
  const addChangeListenerArray = [checkBox, colorPriority, dueDate];
  const addKeyUpListenerArray = [input, notes];
  for (const element of addChangeListenerArray) {
    element.addEventListener("change", function(e) {
      handleKeyUp(e)
    }, false);
  }
  for (const element of addKeyUpListenerArray) {
    element.addEventListener("keyup", function(e) {
      handleKeyUp(e)
    }, false);
  }

  return task;
}

let timer;
const timeoutVal = 1000;
const handleKeyUp = e => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    const clickedEl = e.target;
    // console.log(clickedEl);
    const elParentTask = e.target.closest(".task");
    // console.log(elParentTask);
    const parentProjectId = clickedEl.closest(".project").getAttribute("data-project-id");
    // console.log(parentProjectId);
    data.updateTask(elParentTask, parentProjectId);
  }, timeoutVal);
};

const addProjToDOM = newProj => {
  const newProjEl = createProjectEl(newProj);
  content.appendChild(newProjEl);
  newProjEl.querySelector(".project__add-task-btn").addEventListener("click", function(e) {
    const newTask = new Task(uuidv4());
    addTaskToProj(newTask, e.target.closest(".project"));
    // console.log(newTask);
  }, false);
  return newProjEl;
}

const addTaskToProjDOM = (newTask, projectEl) => {
  const newTaskEl = createTaskEl(newTask);
  projectEl.appendChild(newTaskEl);
}

const addTaskToProj = (newTask, projectEl) => {
  const newTaskEl = createTaskEl(newTask);
  projectEl.appendChild(newTaskEl);
  const projId = projectEl.getAttribute("data-project-id");
  // console.log(`Project ID = ${projId}`);
  const foundProject = data.findProjectByID(projId);
  data.addTask(newTask, foundProject);
}

const newProjBtn = document.getElementById("new-project-btn");
newProjBtn.addEventListener("click", function() {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId, "New project");
  addProjToDOM(newProj);
  data.addProj(newProj);
}, false);

const clearList = parentElement => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

const clearListBtn = document.getElementById("clear-list-btn");
const content = document.getElementById("content");
clearListBtn.addEventListener("click", function() {
  clearList(content);
}, false);

export { populateProjects, createProjectEl, createTaskEl }