function Task (newTaskId, newTaskText, newTaskColor) {
  this.id = newTaskId,
  this.text = newTaskText,
  this.color = newTaskColor,
  this.data_type = "task"
}

export default Task;