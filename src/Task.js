function Task (newTaskId) {
  this.id = newTaskId,
  this.text = "",
  this.notes = "",
  this.due_date = "",
  this.checked = false,
  this.priority = "set",
  this.status = "",
  this.data_type = "task"
}

export default Task;