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
    foundProject = foundProject[0];
    return foundProject;
  },
  findIndexOfProject(projectId) {
    const storedData = data.getData();
    let foundIndex = storedData.findIndex(project => project.id === projectId);
    return foundIndex;
  },
  findIndexOfTask(taskId, taskArray) {
    let foundIndex = taskArray.findIndex(task => task.id === taskId);
    return foundIndex;
  },
  addTask(newTask, projObj) {
    const storedData = this.getData();
    const foundIndex = this.findIndexOfProject(projObj.id);
    storedData[foundIndex].tasks.push(newTask);
    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  },
  updateTask(changedTask, projObjId) {
    const storedData = this.getData();
    const projIndex = this.findIndexOfProject(projObjId);
    console.log(changedTask.id);
    const taskIndex = this.findIndexOfTask(changedTask.getAttribute("data-task-id"), storedData[projIndex].tasks);
    const foundTask = storedData[projIndex].tasks[taskIndex];
    console.log(foundTask);

    foundTask.text = changedTask.querySelector(".task__text-input").value;
    foundTask.notes = changedTask.querySelector(".task__notes").value;
    foundTask.due_date = changedTask.querySelector(".task__due-date").value;
    foundTask.checked = changedTask.querySelector(".task__checkbox").checked;
    foundTask.color = changedTask.querySelector(".task__color-priority").getAttribute("data-color");
    foundTask.status = changedTask.classList;

    localStorage.setItem("to-do-data", JSON.stringify(storedData));
  }
}
export default data;