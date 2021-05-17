import data from "./dataManagement";
import { populateProjects } from "./domOperations";

const body = document.getElementById("body");
const content = document.getElementById("content");

populateProjects(data.getData());