function Task (newTaskId) {
  this.id = newTaskId,
  this.text = "",
  this.notes = "",
  this.due_date = "",
  this.checked = false,
  this.priority = "set",
  this.expanded = false,
  this.visible = true,
  this.data_type = "task"
}

export default Task;