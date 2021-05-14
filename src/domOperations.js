import Project from "./Project";
import Task from "./Task";
import { data, project } from "./dataManagement";
import makeNewEl from "./makeNewEl";

const createProjectEl = newProj => {
  console.log(newProj);
  let projectEl = makeNewEl("div", "project", "", {
    "data-project-id": newProj.id,
    "data-project-name": newProj.name
  });
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
    "type": newTask.text
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

const newProjBtn = document.getElementById("new-project-btn");
newProjBtn.addEventListener("click", function() {
  const newProj = new Project("2", "New project");
  const newProjEl = createProjectEl(newProj);
  project.addNewProject(newProj);
});

export { createProjectEl, createTaskEl }