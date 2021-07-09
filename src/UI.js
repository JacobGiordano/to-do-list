import Project from "./Project";
import data from "./data";
import projUI from "./projectUI";
import taskUI from "./taskUI";
import settings from "./settings";
import { v4 as uuidv4 } from 'uuid';

const ui = {
  a11yClick(e) {
    let proceed = false;
    e.key.toLowerCase() === "enter" || e.key.toLowerCase() === "space" || e.key.toLowerCase() === " " ? proceed = true : null;

    if (proceed) {
      e.preventDefault();
      return proceed;
    }
  },
  clearList(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  },
  handleBodyResize(e) {
    e.matches ? projUI.clearProjStyles() : projUI.clearProjStyles();
  },
  handleNavOptionClick() {
    const optionCheckboxes = document.querySelectorAll(".nav__checkbox");
    let optionsObj = {};

    for (const checkbox of optionCheckboxes) {
      const checkboxDataKey = checkbox.id.replace(/-+/g, "_");
      const checkboxState = checkbox.checked;
      optionsObj[checkboxDataKey] = checkboxState;
    }

    settings.setSettings(optionsObj);
  },
  toggleNavVisibility() {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      hiddenNavBtn.classList.remove("active");
      ui.disableTabbing(nav);
      ui.enableMainContentTabbing();
      document.getElementById("menu-btn").focus();
    } else {
      nav.classList.add("open");
      nav.classList.contains("initial") ? nav.classList.remove("intial") : null;
      hiddenNavBtn.classList.add("active");
      ui.enableTabbing(nav);
      ui.disableTabbing(content);
      newProjBtn.setAttribute("tabindex", "-1");
    }
  },
  disableTabbing(parentElement) {
    const elements = parentElement.querySelectorAll(".task__checkmark, input, button, a, label, textarea");
    for (const el of elements) {
      el.setAttribute("tabindex", "-1");
    }
  },
  enableTabbing(parentElement) {
    const elements = parentElement.querySelectorAll(".task__checkmark, input, button, a, label, textarea");
    const tabIndexZeroExceptions = ["task__checkbox-label", "task__checkbox", "nav__project-hidden-label", "nav__label", "task__due-date-label"];
    
    for (const el of elements) {
      let addTabIndexZero = false;
      const elClasses = Array.from(el.classList);
      const noFlyClassesMatch = elClasses.filter(noFlyClass => tabIndexZeroExceptions.indexOf(noFlyClass) !== -1);

      el.removeAttribute("tabindex");

      noFlyClassesMatch.length === 0 ? addTabIndexZero = true : el.setAttribute("tabindex", "-1");
      el.classList.contains("task__checkmark") ? addTabIndexZero = true : null;

      addTabIndexZero ? el.removeAttribute("tabindex") : null;
      addTabIndexZero && el.classList.contains("task__checkmark") ? el.setAttribute("tabindex", "0") : null;
    }
  },
  enableMainContentTabbing() {
    const menuBtn = document.getElementById("menu-btn");
    const newProjBtn = document.getElementById("new-project-btn");

    menuBtn.tabindex = "0";
    newProjBtn.tabindex = "0";

    const projectEls = content.querySelectorAll(".project");
    for (const proj of projectEls) {
      if (!proj.classList.contains("visibility-off")) {
        ui.enableTabbing(proj.querySelector(".project__header"));
        if (proj.classList.contains("expanded")) {
          const taskList = proj.querySelectorAll(".task");
          if (taskList.length) {
            for (const task of taskList) {
              if (!task.classList.contains("visibility-off")) {
                ui.enableTabbing(task.querySelector(".task__top-wrapper"));
              }
              const bottomBtnsWrapper = task.querySelector(".task__bottom-wrapper");
              if (bottomBtnsWrapper.classList.contains("expanded")) {
                ui.enableTabbing(bottomBtnsWrapper);
              }
            }
          }
        }
      }
    }

    newProjBtn.removeAttribute("tabindex");
  },
  handleDeleteAllDataBtnClick() {
    if (confirm("Delete all stored project data?")) {
      if (confirm("Are you SURE you want to delete all stored project data? This CANNOT be undone.")) {
        data.deleteAllData();
        alert("All project data deleted. The page will now reload.");
        location.reload();
      }
    }
  }
}

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const hiddenNavBtn = document.getElementById("hidden-nav-btn");
const newProjBtn = document.getElementById("new-project-btn");
const content = document.getElementById("content");
// const clearListBtn = document.getElementById("clear-list-btn");
// const pageContent = document.getElementById("content");
const hideCompletedProjectsBtn = document.getElementById("hide-completed-projects");
const hideCompletedTasksBtn = document.getElementById("hide-completed-tasks");
const deleteAllDataBtn = document.getElementById("delete-all-data-btn");

deleteAllDataBtn.addEventListener("click", ui.handleDeleteAllDataBtnClick, false);

menuBtn.addEventListener("click", ui.toggleNavVisibility, false);

hiddenNavBtn.addEventListener("click", ui.toggleNavVisibility, false);

newProjBtn.addEventListener("click", () => {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  const newProjEl = projUI.addProjToDOM(newProj, true);
  data.addProjData(newProj);
  // console.log(newProj);
  newProjEl.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}, false);

// clearListBtn.addEventListener("click", () => {
//   ui.clearList(pageContent);
// }, false);

const optionCheckboxes = document.querySelectorAll(".nav__checkbox");

for (const checkbox of optionCheckboxes) {
  checkbox.addEventListener("click", function() {
    ui.handleNavOptionClick(checkbox);
  }, false);
}

hideCompletedProjectsBtn.addEventListener("click", e => {
  e.target.checked ? projUI.hideAllCompletedProjects() : projUI.showAllCompletedProjects();
}, false);
hideCompletedTasksBtn.addEventListener("click", e => {
  e.target.checked ? taskUI.hideAllCompletedTasks() : taskUI.showAllCompletedTasks();
}, false);

const mediaQuery = window.matchMedia("(min-width: 768px)");
mediaQuery.addEventListener("change", ui.handleBodyResize, false);

document.addEventListener('DOMContentLoaded', () => {
  const savedSettings = settings.getSettings();

  for (let setting in savedSettings) {
    let settingVal = savedSettings[setting];
    setting = setting.replace(/_+/g, "-");
    settingVal ? document.getElementById(`${setting}`).checked = true : null;
  }

  ui.enableTabbing(nav);
  ui.disableTabbing(content);
  setTimeout(() => {
    ui.disableTabbing(nav);
    ui.enableMainContentTabbing();
  }, 100);

}, false);

export default ui;