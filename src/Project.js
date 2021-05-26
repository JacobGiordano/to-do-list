function Project (newProjId) {
  this.id = newProjId,
  this.title = "",
  this.tasks = [],
  this.expanded = true,
  this.visible = true,
  this.data_type = "project"
}

export default Project;