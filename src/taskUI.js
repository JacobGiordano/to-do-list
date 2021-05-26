import makeNewEl from "./makeNewEl";
import data from "./data";
import projUI from "./projectUI";
import ui from "./UI";

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
    checkBox.checked ? task.classList.add("completed") : null;
    const priorityText = newTask.priority.charAt(0).toUpperCase() + newTask.priority.slice(1);
    const buttonText = newTask.priority === "set" ? `${priorityText} Priority` : priorityText;
    const priority = makeNewEl("button", `task__priority priority-${newTask.priority}`, buttonText, {
      "type": "button",
      "data-priority": newTask.priority
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
    const notesBtn = makeNewEl("button", "notes-btn", "notes", {
      "type": "button"
    });
    const deleteBtn = makeNewEl("button", "task__delete-btn", "delete", {
      "type": "button"
    });
    const bottomWrapper = makeNewEl("div", `task__bottom-wrapper ${newTask.expanded ? "expanded" : ""}`, "", "");
    const notes = makeNewEl("textarea", "task__notes", "", {
      "placeholder": "Notes"
    });
    notes.value = newTask.notes;
    notes.value === "" ? notesBtn.classList.add("no-notes") : notesBtn.classList.add("has-notes");
  
    topWrapper.appendChild(checkBox);
    topWrapper.appendChild(priority);
    topWrapper.appendChild(input);
    topWrapper.appendChild(dueDate);
    topWrapper.appendChild(notesBtn);
    topWrapper.appendChild(deleteBtn);
    bottomWrapper.appendChild(notes);
    task.appendChild(topWrapper);
    task.appendChild(bottomWrapper);
  
    // ADD TASK EVENT LISTENERS
    const addChangeListenerArray = [dueDate];
    const addKeyUpListenerArray = [input, notes];

    for (const element of addChangeListenerArray) {
      element.addEventListener("change", function(e) {
        taskUI.handleTaskKeyUp(e);
      }, false);
    }
    for (const element of addKeyUpListenerArray) {
      element.addEventListener("keyup", function(e) {
        e.target.classList.contains("task__notes") ? taskUI.updateNotesBtn(e) : null;
        taskUI.handleTaskKeyUp(e);
      }, false);
    }
    checkBox.addEventListener("click", function(e) {
      const clickedCheckBox = e.target;
      taskUI.updateCompletedTasks(clickedCheckBox.closest(".project"));
      clickedCheckBox.checked ? clickedCheckBox.closest(".task").classList.add("completed") : clickedCheckBox.closest(".task").classList.remove("completed");
      taskUI.handleTaskKeyUp(e);
    });
    notesBtn.addEventListener("click", function(e) {
      taskUI.handleExpandToggleClick(e);
    }, false);
    deleteBtn.addEventListener("click", function(e) {
      taskUI.handleTaskDeleteClick(e);
    }, false);
    priority.addEventListener("click", function(e) {
      taskUI.handleTaskPriorityClick(e);
    }, false);
  
    return task;
  },
  addTaskToProjDOM(newTask, projectEl) {
    const newTaskEl = this.createTaskEl(newTask);
    projectEl.appendChild(newTaskEl);
  },
  addTaskToProj(newTask, projectEl) {
    this.addTaskToProjDOM(newTask, projectEl);
    const projId = projectEl.getAttribute("data-project-id");
    // console.log(`Project ID = ${projId}`);
    const foundProject = data.findProjectDataByID(projId);
    data.addTaskData(newTask, foundProject);
    this.updateCompletedTasks(projectEl);
    console.log(projectEl.querySelector(".no-tasks-msg"));
    if (projectEl.querySelector(".no-tasks-msg")) {
      projectEl.querySelector(".no-tasks-msg").remove();
    }
  },
  updateCompletedTasks(projectEl) {
    const allTasks = projectEl.querySelectorAll(".task");
    const numOfTasks = allTasks.length;
    // console.log(`Total number of tasks: ${numOfTasks}`);
    const completedTasks = [];
    for (let task of allTasks) {
      task.querySelector(".task__checkbox").checked === true ? completedTasks.push(task) : null;
    }
    const countOfCompleted = completedTasks.length;
    // console.log(`Number of completed tasks: ${countOfCompleted}`);
    projUI.updateCompletedTaskTotals(projectEl, numOfTasks, countOfCompleted);
  },
  updateNotesBtn(e) {
    if (e.target.classList.contains("task__notes") && e.target.value.trim() !== "") {
      e.target.closest(".task").querySelector(".notes-btn").classList.remove("no-notes");
      e.target.closest(".task").querySelector(".notes-btn").classList.add("has-notes");
    } else {
      e.target.closest(".task").querySelector(".notes-btn").classList.remove("has-notes");
      e.target.closest(".task").querySelector(".notes-btn").classList.add("no-notes");
    }
  },
  expandTaskNotes(element) {
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
  collapseTaskNotes(element) {
    element.style.height = `${element.scrollHeight}px`;
    window.setTimeout(() => {
      element.style.height = "0";
    }, 100);
    window.setTimeout(() => {
      element.classList.remove("expanded");
    }, 100);
  },
  expandTaskNotesToggle(e) {
    const element = e.target.closest(".task").querySelector(".task__bottom-wrapper");
    element.classList.contains("expanded") ? this.collapseTaskNotes(element) : this.expandTaskNotes(element);
  },
  handleExpandToggleClick(e) {
    taskUI.expandTaskNotesToggle(e);
    const taskEl = e.target.closest(".task");
    const projectElId = taskEl.closest(".project").getAttribute("data-project-id");
    timer = window.setTimeout(() => {
      data.updateTaskData(taskEl, projectElId);
    }, timeoutVal);
  },
  handleTaskKeyUp(e) {
    window.clearTimeout(timer);
    const clickedEl = e.target;
    // console.log(clickedEl);
    const elParentTask = e.target.closest(".task");
    // console.log(elParentTask);
    const parentProjectId = clickedEl.closest(".project").getAttribute("data-project-id");
    // console.log(parentProjectId);
    timer = window.setTimeout(() => {
      data.updateTaskData(elParentTask, parentProjectId);
    }, timeoutVal);
  },
  handleTaskDeleteClick(e) {
    if (confirm("Delete task?")) {
      const clickedEl = e.target;
      const taskEl = e.target.closest(".task");
      const taskId = taskEl.getAttribute("data-task-id");
      const projectEl = clickedEl.closest(".project");
      const projectElId = projectEl.getAttribute("data-project-id");
      
      data.deleteTaskData(taskId, projectElId);
      taskEl.remove();
      this.updateCompletedTasks(projectEl);
      if (projectEl.querySelector(".task") === null) {
        const noTaskMsg = makeNewEl("span", "no-tasks-msg", "This project is empty. Add a task to get started.", "");
        projectEl.appendChild(noTaskMsg);
      }
    }
  },
  handleTaskPriorityClick(e) {
    const clickedEl = e.target;
    const clickedElClasses = clickedEl.classList;
    let priorityLevel;
    if (clickedElClasses.contains("priority-set")) {
      clickedEl.classList.add("priority-low");
      clickedEl.classList.remove("priority-set");
      priorityLevel = "low";
    } else if (clickedElClasses.contains("priority-low")) {
      clickedEl.classList.add("priority-medium");
      clickedEl.classList.remove("priority-low");
      priorityLevel = "medium";
    } else if (clickedElClasses.contains("priority-medium")) {
      clickedEl.classList.add("priority-high");
      clickedEl.classList.remove("priority-medium");
      priorityLevel = "high";
    } else if (clickedElClasses.contains("priority-high")) {
      clickedEl.classList.add("priority-set");
      clickedEl.classList.remove("priority-high");
      priorityLevel = "set";
    }

    let buttonText = priorityLevel === "set" ? `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)} Priority` : `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)}`;
    clickedEl.textContent = buttonText;
    clickedEl.setAttribute("data-priority", priorityLevel);

    const taskEl = e.target.closest(".task");
    const projectEl = clickedEl.closest(".project");
    const projectElId = projectEl.getAttribute("data-project-id");
    
    data.updateTaskData(taskEl, projectElId);
  }
};

let timer;
const timeoutVal = 750;

export default taskUI;