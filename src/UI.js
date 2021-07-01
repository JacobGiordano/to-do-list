import Project from "./Project";
import data from "./data";
import projUI from "./projectUI";
import taskUI from "./taskUI";
import settings from "./settings";
import { v4 as uuidv4 } from 'uuid';

const ui = {
  clearList(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  },
  toggleNavVisibility() {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      hiddenNavBtn.classList.remove("active");
      ui.disableTabbing(nav);
      ui.enableTabbing(content);
      newProjBtn.removeAttribute("tabindex");
    } else {
      nav.classList.add("open");
      hiddenNavBtn.classList.add("active");
      ui.enableTabbing(nav);
      ui.disableTabbing(content);
      newProjBtn.setAttribute("tabindex", "-1");
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
  disableTabbing(parentElement) {
    const elements = parentElement.querySelectorAll(".project, input, button, a, label, textarea");
    for (const el of elements) {
      el.setAttribute("tabindex", "-1");
    }
  },
  enableTabbing(parentElement) {
    const elements = parentElement.querySelectorAll(".project, input, button, a, label, textarea");
    const tabIndexZeroExceptions = ["task__checkbox-label", "task__checkbox", "nav__project-hidden-label", "nav__label"];
    
    for (const el of elements) {
      let addTabIndexZero = false;
      const elClasses = Array.from(el.classList);
      const noFlyClassesMatch = elClasses.filter(noFlyClass => tabIndexZeroExceptions.indexOf(noFlyClass) !== -1);

      el.removeAttribute("tabindex");

      noFlyClassesMatch.length === 0 ? addTabIndexZero = true : el.setAttribute("tabindex", "-1");
      el.classList.contains("task__checkmark") ? addTabIndexZero = true : null;

      addTabIndexZero ? el.setAttribute("tabindex", "0") : null;
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
}, false);

export default ui;