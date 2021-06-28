import Project from "./Project";
import data from "./data";
import projUI from "./projectUI"
import settings from "./settings";
import { v4 as uuidv4 } from 'uuid';

const ui = {
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
    console.log("optionsObj:");
    console.log(optionsObj);

    settings.setSettings(optionsObj);
  }
}

const newProjBtn = document.getElementById("new-project-btn");
const clearListBtn = document.getElementById("clear-list-btn");
const pageContent = document.getElementById("content");
const hideCompletedProjectsBtn = document.getElementById("hide-completed-projects");

newProjBtn.addEventListener("click", () => {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  const newProjEl = projUI.addProjToDOM(newProj, true);
  data.addProjData(newProj);
  console.log(newProj);
  newProjEl.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}, false);

clearListBtn.addEventListener("click", () => {
  ui.clearList(pageContent);
}, false);

const optionCheckboxes = document.querySelectorAll(".nav__checkbox");

for (const checkbox of optionCheckboxes) {
  checkbox.addEventListener("click", function() {
    ui.handleNavOptionClick(checkbox);
  }, false);
}

hideCompletedProjectsBtn.addEventListener("click", function() {
  projUI.hideCompletedProjects();
}, false);

const mediaQuery = window.matchMedia("(min-width: 480px)");
mediaQuery.addEventListener("change", ui.handleBodyResize, false);

export default ui ;