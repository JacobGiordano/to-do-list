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
  expand(element) {
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
  collapse(element) {
    element.style.height = `${element.scrollHeight}px`;
    window.setTimeout(() => {
      element.style.height = "0";
    }, 100);
    window.setTimeout(() => {
      element.classList.remove("expanded");
    }, 100);
  },
  expandToggle(element) {
    element.classList.contains("expanded") ? this.collapse(element) : this.expand(element);
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