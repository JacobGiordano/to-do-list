import { data, project } from "./dataManagement";
import { createProjectEl, createTaskEl } from "./domOperations";

const body = document.getElementById("body");
const content = document.getElementById("content");

data.checkData();