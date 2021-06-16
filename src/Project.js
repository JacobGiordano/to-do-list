function Project (newProjId) {
  this.id = newProjId,
  this.title = "",
  this.tasks = [],
  this.expanded = true,
  this.visible = true,
  this.data_type = "project",
  this.date_created = new Date()
}

export default Project;