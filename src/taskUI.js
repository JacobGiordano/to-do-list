import makeNewEl from "./makeNewEl";
import data from "./data";
import projUI from "./projectUI";
import ui from "./UI";
import settings from "./settings";
import { format, addDays } from "date-fns";

const taskUI = {
  createTaskEl(newTask) {
    const task = makeNewEl("div", "task", "", {
      "data-task-id": newTask.id
    });
    const topWrapper = makeNewEl("div", "task__top-wrapper", "", "");
    const topWrapperLeft = makeNewEl("div", "task__top-wrapper-left", "", "");
    const topWrapperRight = makeNewEl("div", "task__top-wrapper-right", "", "");
    const topWrapperRightInner = makeNewEl("div", "task__top-wrapper-right__inner", "", "");
    const bottomWrapper = makeNewEl("div", `task__bottom-wrapper ${newTask.expanded ? "expanded" : ""}`, "", "");
    const bottomBtnsWrapper = makeNewEl("div", "task__bottom-buttons-wrapper", "", "");
    const checkBoxLabel = makeNewEl("label", "task__checkbox-label", "", {
      "tabindex": "-1"
    });
    const checkBox = makeNewEl("input", "task__checkbox", "", {
      "type": "checkbox",
      "tabindex": "-1"
    });
    const checkMark = makeNewEl("span", "task__checkmark", "", {
      "tabindex": "0"
    });
    checkBox.checked = newTask.checked;
    checkBox.checked ? task.classList.add("completed") : null;
    const input = makeNewEl("input", "task__text-input", "", {
      "type": "text",
      "placeholder": "New Task"
    });
    input.value = newTask.text;
    const dueDateWrapper = makeNewEl("div", "task__due-date-wrapper", "", "");
    const dueDateLabel = makeNewEl("label", "task__due-date-label", "Due: ", {
      "for": `date-${newTask.id}`,
      "tabindex": "-1"
    })
    const dueDateInput = makeNewEl("input", "task__due-date", "", {
      "type": "date",
      "name": `date-${newTask.id}`
    });
    const dueDateText = makeNewEl("span", "task__due-date-text", "", {
      "tabindex": "-1"
    });
    const dueDateClearBtn = makeNewEl("button", "task__due-date-clear-btn material-icons hidden", "clear", "");
    dueDateInput.value = newTask.due_date;
    if (dueDateInput.value !== "") {
      dueDateInput.classList.add("has-date");
      const adjustedDate = addDays(new Date(dueDateInput.value), 1);
      dueDateText.textContent = " " + format(adjustedDate, "MM-dd-yyyy");
      dueDateClearBtn.classList.remove("hidden");
    } else {
      dueDateInput.classList.remove("has-date");
      dueDateText.classList.add("material-icons");
      dueDateText.textContent = "event";
    }
    const notesIcon = makeNewEl("button", "task__notes-icon material-icons-outlined", "description", {
      "title": "Task notes indicator"
    });
    const deleteBtn = makeNewEl("button", "task__delete-btn material-icons", "delete_outline", {
      "type": "button",
      "title": "Delete task",
      "tabindex": "-1"
    });
    const editBtn = makeNewEl("button", "task__edit-btn material-icons", "more_vert", {
      "type": "button",
      "title": "Edit Task Options"
    });
    const priorityBar = makeNewEl("button", `task__priority-bar priority-${newTask.priority}`, "", "");
    const priorityText = newTask.priority.charAt(0).toUpperCase() + newTask.priority.slice(1);
    const priorityButtonText = newTask.priority === "set" ? `${priorityText} Priority` : priorityText;
    const priority = makeNewEl("button", `task__priority priority-${newTask.priority}`, priorityButtonText, {
      "type": "button",
      "data-priority": newTask.priority,
      "title": "Task priority",
      "tabindex": "-1"
    });
    const notes = makeNewEl("textarea", "task__notes", "", {
      "placeholder": "Notes",
      "tabindex": "-1"
    });
    notes.value = newTask.notes;
    notes.value !== "" ? notesIcon.classList.add("has-notes") : notesIcon.classList.remove("has-notes");



    // DON'T THINK I ADDED SOMETHING THAT STORES THE STATE OF A TASKS' BOTTOM WRAPPER, AND THAT SEEMS TO BE WHAT I'D NEED TO EITHER ENABLE OR DISABLE TABINDEX FOR EVERYTHING INSIDE OF IT ON PAGE LOAD AND DISABLE ENABLE TOGGLE <_<
    newTask.expanded ? notes.removeAttribute("tabindex") : null;
    newTask.expanded ? priority.removeAttribute("tabindex") : null;
    newTask.expanded ? deleteBtn.removeAttribute("tabindex") : null;



    checkBoxLabel.appendChild(checkBox);
    checkBoxLabel.appendChild(checkMark);
    topWrapperLeft.appendChild(checkBoxLabel);
    topWrapperLeft.appendChild(priorityBar);
    topWrapperLeft.appendChild(input);
    dueDateLabel.appendChild(dueDateInput);
    dueDateLabel.appendChild(dueDateText);
    dueDateWrapper.appendChild(dueDateLabel)
    dueDateWrapper.appendChild(dueDateClearBtn);
    topWrapperRight.appendChild(dueDateWrapper);
    topWrapperRightInner.appendChild(notesIcon);
    topWrapperRightInner.appendChild(editBtn);
    topWrapperRight.appendChild(topWrapperRightInner);
    topWrapper.appendChild(topWrapperLeft);
    topWrapper.appendChild(topWrapperRight);
    bottomBtnsWrapper.appendChild(priority);
    bottomBtnsWrapper.appendChild(deleteBtn);
    bottomWrapper.appendChild(notes);
    bottomWrapper.appendChild(bottomBtnsWrapper);
    task.appendChild(topWrapper);
    task.appendChild(bottomWrapper);
  
    // ADD TASK EVENT LISTENERS
    const addChangeListenerArray = [dueDateInput];
    const addKeyUpListenerArray = [input, notes];

    for (const element of addChangeListenerArray) {
      element.addEventListener("change", function(e) {
        if (e.target.classList.contains("task__due-date")) {
          taskUI.updateDateContent(e);
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
      const taskEl = clickedCheckBox.closest(".task");
      const projEl = clickedCheckBox.closest(".project");
      taskUI.updateCompletedTasks(projEl);
      clickedCheckBox.checked ? taskEl.classList.add("completed") : taskEl.classList.remove("completed");
      
      if (settings.getSettings().hide_completed_tasks && clickedCheckBox.checked) {
        setTimeout(() => {
          taskEl.classList.add("visibility-off");
        }, 250);
      }

      const completedTasks = projEl.querySelector(".project__completed-count").textContent;
      const totalTasks = projEl.querySelector(".project__total-task-count").textContent;
      if (settings.getSettings().hide_completed_projects && completedTasks == totalTasks) {
        const navEl = document.querySelector(`.nav__li[data-project-id="${projEl.getAttribute('data-project-id')}"]`);
        navEl.querySelector(".nav__visibility-icon").checked = true;
        navEl.querySelector(".nav__visibility-icon").classList.add("visibility-off");
        navEl.querySelector(".nav__visibility-icon").classList.remove("visibility-on");
        navEl.querySelector(".nav__visibility-icon").textContent = "visibility_off"
        navEl.setAttribute("title", "Hidden");
        
        data.updateBasicProjState({
          "id": projEl.getAttribute("data-project-id"),
          "title": projEl.getAttribute("data-project-title"),
          "expanded": projEl.classList.contains("expanded") ? true : false,
          "visible": false
        });

        setTimeout(() => {
          projEl.classList.add("visibility-off");
        }, 250);
      }
      taskUI.handleTaskKeyUp(e);
    });
    checkBoxLabel.addEventListener("keydown", e => {
      ui.a11yClick(e) ? checkBox.click() : null;
    });
    editBtn.addEventListener("click", e => {
      taskUI.handleExpandToggleClick(e);
      const bottomWrapper = e.target.closest(".task").querySelector(".task__bottom-wrapper");
      setTimeout(() => {
        bottomWrapper.classList.contains("expanded") ? 
        ui.enableTabbing(bottomWrapper) : ui.disableTabbing(bottomWrapper);
      }, 100);
    }, false);
    notesIcon.addEventListener("click", e => {
      taskUI.handleExpandToggleClick(e);
      const bottomWrapper = e.target.closest(".task").querySelector(".task__bottom-wrapper");
      setTimeout(() => {
        bottomWrapper.classList.contains("expanded") ? 
        ui.enableTabbing(bottomWrapper) : ui.disableTabbing(bottomWrapper);
      }, 100);
    }, false);
    deleteBtn.addEventListener("click", e => {
      taskUI.handleTaskDeleteClick(e);
    }, false);
    priority.addEventListener("click", e => {
      taskUI.handleTaskPriorityClick(e);
    }, false);
    priorityBar.addEventListener("click", e => {
      taskUI.handleTaskPriorityClick(e);
    }, false);
    dueDateClearBtn.addEventListener("click", e => {
      taskUI.clearDueDate(e);
    }, false);
  
    return task;
  },
  addTaskToProjDOM(newTask, projectEl, autoFocusBool) {
    const newTaskEl = this.createTaskEl(newTask);
    projectEl.appendChild(newTaskEl);
    if (autoFocusBool) {
      newTaskEl.querySelector(".task__text-input").focus();
      newTaskEl.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
    return newTaskEl;
  },
  addTaskToProj(newTask, projectEl, autoFocusTaskTextBool) {
    this.addTaskToProjDOM(newTask, projectEl, autoFocusTaskTextBool);
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
  updateDateContent(e) {
    // console.log(e.target.value.trim());
    const clickedEl = e.target;
    if (clickedEl.classList.contains("task__due-date") && clickedEl.value.trim() !== "") {
      const task = clickedEl.closest(".task");
      task.querySelector(".task__due-date").classList.add("has-date");
      const dateTextEl = task.querySelector(".task__due-date-text");
      // console.log(dateTextEl);
      const adjustedDate = addDays(new Date(clickedEl.value), 1);
      const date = " " + format(adjustedDate, "MM-dd-yyyy");

      dateTextEl.textContent = " " +  date;
      dateTextEl.classList.remove("material-icons");
      task.querySelector(".task__due-date-clear-btn").classList.remove("hidden");
    } else {
      clickedEl.closest(".task").querySelector(".task__due-date").classList.remove("has-date");
      taskUI.handleTaskKeyUp(e);
      e.target.classList.add("hidden");
    }
  },
  clearDueDate(e) {
    const task = e.target.closest(".task");
    const dateText = task.querySelector(".task__due-date-text");
    task.querySelector(".task__due-date").value = "";
    dateText.classList.add("material-icons");
    dateText.textContent = "event";
    taskUI.updateDateContent(e);
    taskUI.handleTaskKeyUp(e);
  },
  expandTask(element) {
    const getHeight = () => {
      const height = `${element.scrollHeight}px`;
      return height;
    };

    const height = getHeight();
    element.classList.add("expanded");
    element.style.height = height;

    window.setTimeout(() => {
      element.style.height = "";
      element.closest(".task").querySelector(".task__notes").focus();
    }, 100);
  },
  collapseTask(element) {
    element.style.height = `${element.scrollHeight}px`;
    window.setTimeout(() => {
      element.style.height = "0";
    }, 100);
    window.setTimeout(() => {
      element.classList.remove("expanded");
    }, 100);
  },
  expandTaskToggle(e) {
    const element = e.target.closest(".task").querySelector(".task__bottom-wrapper");
    element.classList.contains("expanded") ? this.collapseTask(element) : this.expandTask(element);
  },
  handleExpandToggleClick(e) {
    taskUI.expandTaskToggle(e);
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
    const taskEl = clickedEl.closest(".task");
    const clickedElClasses = clickedEl.classList;
    const clickedElPriorityBtn = taskEl.querySelector(".task__priority");
    const clickedElPriorityBar = taskEl.querySelector(".task__priority-bar");
    let priorityLevel;
    if (clickedElClasses.contains("priority-set")) {
      clickedElPriorityBtn.classList.add("priority-low");
      clickedElPriorityBtn.classList.remove("priority-set");
      clickedElPriorityBar.classList.add("priority-low");
      clickedElPriorityBar.classList.remove("priority-set");
      priorityLevel = "low";
    } else if (clickedElClasses.contains("priority-low")) {
      clickedElPriorityBtn.classList.add("priority-medium");
      clickedElPriorityBtn.classList.remove("priority-low");
      clickedElPriorityBar.classList.add("priority-medium");
      clickedElPriorityBar.classList.remove("priority-low");
      priorityLevel = "medium";
    } else if (clickedElClasses.contains("priority-medium")) {
      clickedElPriorityBtn.classList.add("priority-high");
      clickedElPriorityBtn.classList.remove("priority-medium");
      clickedElPriorityBar.classList.add("priority-high");
      clickedElPriorityBar.classList.remove("priority-medium");
      priorityLevel = "high";
    } else if (clickedElClasses.contains("priority-high")) {
      clickedElPriorityBtn.classList.add("priority-set");
      clickedElPriorityBtn.classList.remove("priority-high");
      clickedElPriorityBar.classList.add("priority-set");
      clickedElPriorityBar.classList.remove("priority-high");
      priorityLevel = "set";
    }

    let priorityButtonText = priorityLevel === "set" ? `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)} Priority` : `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)}`;
    clickedElPriorityBtn.textContent = priorityButtonText;
    clickedElPriorityBtn.setAttribute("data-priority", priorityLevel);
    clickedElPriorityBar.setAttribute("data-priority", priorityLevel);

    const projectEl = clickedEl.closest(".project");
    const projectElId = projectEl.getAttribute("data-project-id");
    
    data.updateTaskData(taskEl, projectElId);
  },
  hideAllCompletedTasks() {
    const allTasks = document.querySelectorAll(".task");
    for (const task of allTasks) {
      task.classList.contains("completed") ? task.classList.add("visibility-off") : null;
    }
  },
  showAllCompletedTasks() {
    const allTasks = document.querySelectorAll(".task");
    for (const task of allTasks) {
      task.classList.contains("completed") ? task.classList.remove("visibility-off") : null;
    }
  }
};

let timer;
const timeoutVal = 250;

export default taskUI;