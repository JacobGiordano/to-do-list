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
    const topWrapperLeft = makeNewEl("div", "task__top-wrapper-left", "", "");
    const topWrapperRight = makeNewEl("div", "task__top-wrapper-right", "", "");
    const bottomWrapper = makeNewEl("div", `task__bottom-wrapper ${newTask.expanded ? "expanded" : ""}`, "", "");
    const bottomBtnsWrapper = makeNewEl("div", "task__bottom-buttons-wrapper", "", "");
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
    const dueDateLabel = makeNewEl("label", "task__due-date-label", "Due: ", {
      "for": `date-${newTask.id}`
    })
    const dueDateBtn = makeNewEl("input", "task__due-date", "", {
      "type": "date",
      "name": `date-${newTask.id}`
    });
    dueDateBtn.value = newTask.due_date;
    dueDateBtn.value !== "" ? dueDateBtn.classList.add("has-date") : dueDateBtn.classList.remove("has-date");
    const notesIcon = makeNewEl("div", "task__notes-icon material-icons-outlined", "description", {
      "title": "Task notes indicator"
    });
    const deleteBtn = makeNewEl("button", "task__delete-btn material-icons", "delete_outline", {
      "type": "button",
      "title": "Delete task"
    });
    const editBtn = makeNewEl("button", "task__edit-btn material-icons", "more_vert", {
      "type": "button",
      "title": "Edit Task Options"
    });
    const notes = makeNewEl("textarea", "task__notes", "", {
      "placeholder": "Notes",
      "name": `notes-${newTask.id}`
    });
    notes.value = newTask.notes;
    notes.value !== "" ? notesIcon.classList.add("has-notes") : notesIcon.classList.remove("has-notes");

    topWrapperLeft.appendChild(checkBox);
    topWrapperLeft.appendChild(input);
    dueDateLabel.appendChild(dueDateBtn);
    topWrapperRight.appendChild(dueDateLabel);
    topWrapperRight.appendChild(notesIcon);
    topWrapperRight.appendChild(editBtn);
    topWrapper.appendChild(topWrapperLeft);
    topWrapper.appendChild(topWrapperRight);
    bottomBtnsWrapper.appendChild(priority);
    bottomBtnsWrapper.appendChild(deleteBtn);
    bottomWrapper.appendChild(bottomBtnsWrapper);
    bottomWrapper.appendChild(notes);
    task.appendChild(topWrapper);
    task.appendChild(bottomWrapper);
  
    // ADD TASK EVENT LISTENERS
    const addChangeListenerArray = [dueDateBtn];
    const addKeyUpListenerArray = [input, notes];

    for (const element of addChangeListenerArray) {
      element.addEventListener("change", function(e) {
        if (e.target.classList.contains("task__due-date")) {
          taskUI.updateDateIcon(e);
        }

        taskUI.handleTaskKeyUp(e);
      }, false);
    }
    for (const element of addKeyUpListenerArray) {
      element.addEventListener("keyup", e => {
        if (e.target.classList.contains("task__notes")) {
          taskUI.updateNotesIcon(e);
        }

        taskUI.handleTaskKeyUp(e);
      }, false);
    }
    checkBox.addEventListener("click", e => {
      const clickedCheckBox = e.target;
      taskUI.updateCompletedTasks(clickedCheckBox.closest(".project"));
      clickedCheckBox.checked ? clickedCheckBox.closest(".task").classList.add("completed") : clickedCheckBox.closest(".task").classList.remove("completed");
      taskUI.handleTaskKeyUp(e);
    });
    editBtn.addEventListener("click", e => {
      taskUI.handleExpandToggleClick(e);
    }, false);
    notesIcon.addEventListener("click", e => {
      taskUI.handleExpandToggleClick(e);
    }, false);
    deleteBtn.addEventListener("click", e => {
      taskUI.handleTaskDeleteClick(e);
    }, false);
    priority.addEventListener("click", e => {
      taskUI.handleTaskPriorityClick(e);
    }, false);
    dueDateBtn.addEventListener("click", e => {
      console.log("In eventlistener");
      taskUI.updateDateIcon(e);
      taskUI.handleTaskKeyUp(e);
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
    // console.log(projectEl.querySelector(".no-tasks-msg"));
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
  updateNotesIcon(e) {
    if (e.target.classList.contains("task__notes") && e.target.value.trim() !== "") {
      e.target.closest(".task").querySelector(".task__notes-icon").classList.add("has-notes");
    } else {
      e.target.closest(".task").querySelector(".task__notes-icon").classList.remove("has-notes");
    }
  },
  updateDateIcon(e) {
    console.log(e.target.value.trim());
    if (e.target.classList.contains("task__due-date") && e.target.value.trim() !== "") {
      e.target.closest(".task").querySelector(".task__due-date").classList.add("has-date");
    } else {
      e.target.closest(".task").querySelector(".task__due-date").classList.remove("has-date");
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