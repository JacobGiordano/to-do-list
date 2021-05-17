function Task (newTaskId, newTaskText) {
  this.id = newTaskId,
  this.text = newTaskText,
  this.color = "white",
  this.notes = ""
  this.data_type = "task"
}

export default Task;