function Project (newProjId, newProjName) {
  this.id = newProjId,
  this.name = newProjName,
  this.tasks = [],
  this.data_type = "project"
}

export default Project;