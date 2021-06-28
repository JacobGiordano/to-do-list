const data = {
  getData() {
    const storedData = JSON.parse(localStorage.getItem("to-do-data") || "[]");
    // console.log(storedData);
    return storedData;
  },
  // setData(newData) {
  //   let storedData = this.getData();
  //   storedData !== null ? localStorage.setItem("to-do-data", JSON.stringify(newData)) : localStorage.setItem("to-do-data", JSON.stringify([]));
  //   storedData = this.getData();
  //   return storedData;
  // },
  addProjData(newData) {
    let storedData = this.getData();
    storedData !== null ? storedData.push(newData) : storedData = newData;
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
    storedData = this.getData();
    return storedData;
  },
  updateProjectDataTitle(projectTitle, projectId) {
    const storedData = this.getData();
    const projIndex = this.findIndexOfProjectData(projectId);
    storedData[projIndex].title = projectTitle;
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  updateBasicProjState(basicInfoObj) {
    const storedData = this.getData();
    const projIndex = this.findIndexOfProjectData(basicInfoObj.id);
    storedData[projIndex].title = basicInfoObj.title;
    storedData[projIndex].expanded = basicInfoObj.expanded;
    storedData[projIndex].visible = basicInfoObj.visible;
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  deleteProjData(projectId){
    const storedData = this.getData();
    const projIndex = this.findIndexOfProjectData(projectId);
    storedData.splice(projIndex, 1);
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  findProjectDataByID(projectId) {
    const storedData = data.getData();
    let foundProject = storedData.filter(project => project.id.toString() === projectId);
    foundProject = foundProject[0];
    return foundProject;
  },
  findIndexOfProjectData(projectId) {
    const storedData = data.getData();
    let foundIndex = storedData.findIndex(project => project.id === projectId);
    return foundIndex;
  },
  findIndexOfTaskData(taskId, taskArray) {
    let foundIndex = taskArray.findIndex(task => task.id === taskId);
    return foundIndex;
  },
  addTaskData(newTask, projObj) {
    const storedData = this.getData();
    const foundIndex = this.findIndexOfProjectData(projObj.id);
    storedData[foundIndex].tasks.push(newTask);
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  updateTaskData(changedTask, projObjId) {
    const storedData = this.getData();
    const projIndex = this.findIndexOfProjectData(projObjId);
    // console.log(changedTask.id);
    const taskIndex = this.findIndexOfTaskData(changedTask.getAttribute("data-task-id"), storedData[projIndex].tasks);
    const foundTask = storedData[projIndex].tasks[taskIndex];
    console.log(foundTask);

    foundTask.text = changedTask.querySelector(".task__text-input").value;
    foundTask.notes = changedTask.querySelector(".task__notes").value;
    foundTask.due_date = changedTask.querySelector(".task__due-date").value;
    foundTask.checked = changedTask.querySelector(".task__checkbox").checked;
    foundTask.expanded = changedTask.querySelector(".task__bottom-wrapper").classList.contains("expanded");
    foundTask.priority = changedTask.querySelector(".task__priority").getAttribute("data-priority");
    foundTask.status = changedTask.classList;

    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  deleteTaskData(taskId, projectId){
    const storedData = this.getData();
    const projIndex = this.findIndexOfProjectData(projectId);
    const taskIndex = this.findIndexOfTaskData(taskId, storedData[projIndex].tasks);
    storedData[projIndex].tasks.splice(taskIndex, 1);
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  }
}
export default data;