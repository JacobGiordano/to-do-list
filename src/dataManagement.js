const data = {
  getData() {
    const storedData = JSON.parse(localStorage.getItem("to-do-data") || "[]");
    // console.log(storedData);
    return storedData;
  },
  setData(newData) {
    let storedData = this.getData();
    storedData !== null ? localStorage.setItem("to-do-data", JSON.stringify(newData)) : localStorage.setItem("to-do-data", JSON.stringify([]));
    storedData = this.getData();
    return storedData;
  },
  addProj(newData) {
    let storedData = this.getData();
    storedData !== null ? storedData.push(newData) : storedData = newData;
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
    storedData = this.getData();
    return storedData;
  },
  findProjectByID(projectId) {
    const storedData = data.getData();
    let foundProject = storedData.filter(project => project.id.toString() === projectId);
    // console.log(foundProject);
    foundProject = foundProject[0];
    // projectId.length !== 0 ? console.log(foundProject) : console.error("No project found");
    return foundProject;
  },
  findIndexOfProject(projectId) {
    const storedData = data.getData();
    let foundIndex = storedData.findIndex(project => project.id === projectId);
    return foundIndex;
  },
  addTask(newTask, projObj) {
    const storedData = this.getData();
    const foundIndex = this.findIndexOfProject(projObj.id);
    storedData[foundIndex].tasks.push(newTask);
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  }
}
export { data };