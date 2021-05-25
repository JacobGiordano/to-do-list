import Project from "./Project";
import data from "./data";
import projUI from "./projectUI"
import { v4 as uuidv4 } from 'uuid';

const ui = {
  clearList(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
}

const newProjBtn = document.getElementById("new-project-btn");
const clearListBtn = document.getElementById("clear-list-btn");
const content = document.getElementById("content");

newProjBtn.addEventListener("click", function() {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId);
  projUI.addProjToDOM(newProj);
  data.addProjData(newProj);
}, false);

clearListBtn.addEventListener("click", function() {
  ui.clearList(content);
}, false);


export default ui ;