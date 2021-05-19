import Project from "./Project";
import data from "./dataManagement";
import projUI from "./projectUI"
import { v4 as uuidv4 } from 'uuid';

const ui = {
  clearList(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  },
  handleKeyUp(e) {
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
}

let timer;
const timeoutVal = 1000;
const newProjBtn = document.getElementById("new-project-btn");
const clearListBtn = document.getElementById("clear-list-btn");
const content = document.getElementById("content");

newProjBtn.addEventListener("click", function() {
  const newProjId = uuidv4();
  const newProj = new Project(newProjId, "New project");
  projUI.addProjToDOM(newProj);
  data.addProj(newProj);
}, false);

clearListBtn.addEventListener("click", function() {
  clearList(content);
}, false);


export default ui ;