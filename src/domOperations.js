import Project from "./Project";
import Task from "./Task";
// import { data, project } from "./dataManagement";
import { data } from "./dataManagement";
import makeNewEl from "./makeNewEl";

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
    "type": "text"
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
  const checkBox = makeNewEl("input", "task__checkbox", "", {
    "type": "checkbox"
  });
  const colorPriority = makeNewEl("button", `task__color-priority priority-${newTask.color}`, "", {
    "type": "button"
  });
  const input = makeNewEl("input", "task__text-input", "", {
    "type": "text",
    "placeholder": "New Task"
  });
  const deleteBtn = makeNewEl("button", "task__delete-btn", "delete", {
    "type": "button"
  });

  task.appendChild(checkBox);
  task.appendChild(colorPriority);
  task.appendChild(input);
  task.appendChild(deleteBtn);
  return task;
}

const addProjToDOM = newProj => {
  const newProjEl = createProjectEl(newProj);
  content.appendChild(newProjEl);
  newProjEl.querySelector(".project__add-task-btn").addEventListener("click", function(e) {
    const newTask = new Task("1", "New Task!!!", "blue");
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
  const newProjId = "2;"
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