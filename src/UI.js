import Project from "./Project";
import data from "./data";
import projUI from "./projectUI"
import { v4 as uuidv4 } from 'uuid';

const ui = {
  clearList(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  },
  handleBodyResize(e) {
    e.matches ? projUI.clearProjStyles() : projUI.clearProjStyles();
  }
}

const newProjBtn = document.getElementById("new-project-btn");
const clearListBtn = document.getElementById("clear-list-btn");
const pageContent = document.getElementById("content");

newProjBtn.addEventListener("click", function() {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  projUI.addProjToDOM(newProj);
  data.addProjData(newProj);
  console.log(newProj);
}, false);

clearListBtn.addEventListener("click", function() {
  ui.clearList(pageContent);
}, false);

const mediaQuery = window.matchMedia("(min-width: 660px)");
mediaQuery.addEventListener("change", ui.handleBodyResize, false);
// ui.handleBodyResize(mediaQuery);


export default ui ;