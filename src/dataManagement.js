import Project from "./Project";
import Task from "./Task";

const data = {
  checkData() {
    const storedData = this.getData();
    storedData === null ? this.setDefaultData() : null;
    return storedData;
  },
  getData() {
    const storedData = JSON.parse(localStorage.getItem("to-do-data"));
    console.log(storedData);
    return storedData;
  },
  setData(newData) {
    let storedData = this.getData();
    storedData !== null ? storedData.push(newData) : storedData = newData;
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
    return storedData;
  },
  setDefaultData() {
    let projArray = [];
    const defaultProject = new Project(1, "Default Project");
    const defaultTask = new Task(1, "Default Task", "red");
    defaultProject.tasks.push(defaultTask);
    projArray.push(defaultProject);
    this.setData(projArray);
    const storedData = this.getData();
    return storedData;
  }
}

const project = {
  addNewProject(projectObj) {
    const updatedData = data.setData(projectObj);
    return updatedData;
  },
  findProjectByID(projectId) {
    const storedData = JSON.parse(data.getData());
    const foundProject = storedData.filter(project => project.id === projectId);
    projectId.length > 0 ? console.log(foundProject) : console.log("No project found");
    return foundProject;
  }
}

export { data, project };