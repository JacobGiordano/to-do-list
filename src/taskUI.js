import makeNewEl from "./makeNewEl";
import data from "./data";

const taskUI = {
  createTaskEl(newTask) {
    const task = makeNewEl("div", "task", "", {
      "data-task-id": newTask.id
    });
    const topWrapper = makeNewEl("div", "task__top-wrapper", "", "");
    const checkBox = makeNewEl("input", "task__checkbox", "", {
      "type": "checkbox"
    });
    checkBox.checked = newTask.checked;
    const colorPriority = makeNewEl("button", `task__color-priority priority-${newTask.color}`, "", {
      "type": "button",
      "data-color": newTask.color
    });
    const input = makeNewEl("input", "task__text-input", "", {
      "type": "text",
      "placeholder": "New Task"
    });
    input.value = newTask.text;
    const dueDate = makeNewEl("input", "task__due-date", "", {
      "type": "date"
    });
    dueDate.value = newTask.due_date;
    const deleteBtn = makeNewEl("button", "task__delete-btn", "delete", {
      "type": "button"
    });
    const bottomWrapper = makeNewEl("div", "task__bottom-wrapper", "", "");
    const notes = makeNewEl("textarea", "task__notes", "", {
      "placeholder": "Notes"
    });
    notes.value = newTask.notes;
  
    topWrapper.appendChild(checkBox);
    topWrapper.appendChild(colorPriority);
    topWrapper.appendChild(input);
    topWrapper.appendChild(dueDate);
    topWrapper.appendChild(deleteBtn);
    bottomWrapper.appendChild(notes);
    task.appendChild(topWrapper);
    task.appendChild(bottomWrapper);
  
    // ADD TASK EVENT LISTENERS
    const addChangeListenerArray = [checkBox, colorPriority, dueDate];
    const addKeyUpListenerArray = [input, notes];
    for (const element of addChangeListenerArray) {
      element.addEventListener("change", function(e) {
        taskUI.handleTaskKeyUp(e);
      }, false);
    }
    for (const element of addKeyUpListenerArray) {
      element.addEventListener("keyup", function(e) {
        taskUI.handleTaskKeyUp(e);
      }, false);
    }
  
    return task;
  },
  addTaskToProjDOM(newTask, projectEl) {
    const newTaskEl = this.createTaskEl(newTask);
    projectEl.appendChild(newTaskEl);
  },
  addTaskToProj(newTask, projectEl) {
    const newTaskEl = this.createTaskEl(newTask);
    projectEl.appendChild(newTaskEl);
    const projId = projectEl.getAttribute("data-project-id");
    // console.log(`Project ID = ${projId}`);
    const foundProject = data.findProjectByID(projId);
    data.addTask(newTask, foundProject);
  },
  handleTaskKeyUp(e) {
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
  }
};

let timer;
const timeoutVal = 1000;

export default taskUI;