/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project (newProjId, newProjName) {\n  this.id = newProjId,\n  this.name = newProjName,\n  this.tasks = [],\n  this.data_type = \"project\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task (newTaskId, newTaskText) {\n  this.id = newTaskId,\n  this.text = newTaskText,\n  this.color = \"white\",\n  this.notes = \"\"\n  this.data_type = \"task\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/dataManagement.js":
/*!*******************************!*\
  !*** ./src/dataManagement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\n  getData() {\n    const storedData = JSON.parse(localStorage.getItem(\"to-do-data\") || \"[]\");\n    // console.log(storedData);\n    return storedData;\n  },\n  setData(newData) {\n    let storedData = this.getData();\n    storedData !== null ? localStorage.setItem(\"to-do-data\", JSON.stringify(newData)) : localStorage.setItem(\"to-do-data\", JSON.stringify([]));\n    storedData = this.getData();\n    return storedData;\n  },\n  addProj(newData) {\n    let storedData = this.getData();\n    storedData !== null ? storedData.push(newData) : storedData = newData;\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n    storedData = this.getData();\n    return storedData;\n  },\n  findProjectByID(projectId) {\n    const storedData = data.getData();\n    let foundProject = storedData.filter(project => project.id.toString() === projectId);\n    // console.log(foundProject);\n    foundProject = foundProject[0];\n    // projectId.length !== 0 ? console.log(foundProject) : console.error(\"No project found\");\n    return foundProject;\n  },\n  findIndexOfProject(projectId) {\n    const storedData = data.getData();\n    let foundIndex = storedData.findIndex(project => project.id === projectId);\n    return foundIndex;\n  },\n  addTask(newTask, projObj) {\n    const storedData = this.getData();\n    const foundIndex = this.findIndexOfProject(projObj.id);\n    storedData[foundIndex].tasks.push(newTask);\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/dataManagement.js?");

/***/ }),

/***/ "./src/domOperations.js":
/*!******************************!*\
  !*** ./src/domOperations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateProjects\": () => (/* binding */ populateProjects),\n/* harmony export */   \"createProjectEl\": () => (/* binding */ createProjectEl),\n/* harmony export */   \"createTaskEl\": () => (/* binding */ createTaskEl)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataManagement */ \"./src/dataManagement.js\");\n/* harmony import */ var _makeNewEl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeNewEl */ \"./src/makeNewEl.js\");\n\n\n// import { data, project } from \"./dataManagement\";\n\n\n\nconst populateProjects = allProjectData => {\n  for (const project of allProjectData) {\n    const newProjEl = addProjToDOM(project);\n    for (const task of project.tasks) {\n      addTaskToProjDOM(task, newProjEl);\n    }\n  }\n}\n\nconst createProjectEl = newProj => {\n  // console.log(newProj);\n  let projectEl = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"div\", \"project\", \"\", {\n    \"data-project-id\": newProj.id,\n    \"data-project-name\": newProj.name\n  });\n  const projectName = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"input\", \"project__title\", \"New Project\", {\n    \"type\": \"text\"\n  });\n  const newTaskBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"button\", \"project__add-task-btn\", \"Add Task\", {\n    \"type\": \"button\"\n  });\n  const deleteProjectBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"button\", \"project__delete-project-btn\", \"Delete Project\", {\n    \"type\": \"button\"\n  });\n  projectEl.appendChild(projectName);\n  projectEl.appendChild(newTaskBtn);\n  projectEl.appendChild(deleteProjectBtn);\n  return projectEl;\n}\n\nconst createTaskEl = newTask => {\n  const task = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"div\", \"task\", \"\", {\n    \"data-task-id\": newTask.id\n  });\n  const checkBox = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"input\", \"task__checkbox\", \"\", {\n    \"type\": \"checkbox\"\n  });\n  const colorPriority = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"button\", `task__color-priority priority-${newTask.color}`, \"\", {\n    \"type\": \"button\"\n  });\n  const input = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"input\", \"task__text-input\", \"\", {\n    \"type\": \"text\",\n    \"placeholder\": \"New Task\"\n  });\n  const deleteBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_3__.default)(\"button\", \"task__delete-btn\", \"delete\", {\n    \"type\": \"button\"\n  });\n\n  task.appendChild(checkBox);\n  task.appendChild(colorPriority);\n  task.appendChild(input);\n  task.appendChild(deleteBtn);\n  return task;\n}\n\nconst addProjToDOM = newProj => {\n  const newProjEl = createProjectEl(newProj);\n  content.appendChild(newProjEl);\n  newProjEl.querySelector(\".project__add-task-btn\").addEventListener(\"click\", function(e) {\n    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__.default(\"1\", \"New Task!!!\", \"blue\");\n    addTaskToProj(newTask, e.target.closest(\".project\"));\n    // console.log(newTask);\n  }, false);\n  return newProjEl;\n}\n\nconst addTaskToProjDOM = (newTask, projectEl) => {\n  const newTaskEl = createTaskEl(newTask);\n  projectEl.appendChild(newTaskEl);\n}\n\nconst addTaskToProj = (newTask, projectEl) => {\n  const newTaskEl = createTaskEl(newTask);\n  projectEl.appendChild(newTaskEl);\n  const projId = projectEl.getAttribute(\"data-project-id\");\n  // console.log(`Project ID = ${projId}`);\n  const foundProject = _dataManagement__WEBPACK_IMPORTED_MODULE_2__.data.findProjectByID(projId);\n  _dataManagement__WEBPACK_IMPORTED_MODULE_2__.data.addTask(newTask, foundProject);\n}\n\nconst newProjBtn = document.getElementById(\"new-project-btn\");\nnewProjBtn.addEventListener(\"click\", function() {\n  const newProjId = \"2;\"\n  const newProj = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(newProjId, \"New project\");\n  addProjToDOM(newProj);\n  _dataManagement__WEBPACK_IMPORTED_MODULE_2__.data.addProj(newProj);\n}, false);\n\nconst clearList = parentElement => {\n  while (parentElement.firstChild) {\n    parentElement.removeChild(parentElement.firstChild);\n  }\n}\n\nconst clearListBtn = document.getElementById(\"clear-list-btn\");\nconst content = document.getElementById(\"content\");\nclearListBtn.addEventListener(\"click\", function() {\n  clearList(content);\n}, false);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/domOperations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManagement */ \"./src/dataManagement.js\");\n/* harmony import */ var _domOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domOperations */ \"./src/domOperations.js\");\n\n\n\nconst body = document.getElementById(\"body\");\nconst content = document.getElementById(\"content\");\n\n(0,_domOperations__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(_dataManagement__WEBPACK_IMPORTED_MODULE_0__.default.getData());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/makeNewEl.js":
/*!**************************!*\
  !*** ./src/makeNewEl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeNewEl = (elementType, classesToAdd, elementText, attributesObj) => {\n  let newElement = document.createElement(elementType);\n  if (elementType.indexOf(\"input\") > -1) {\n    if (elementText !== \"\") {\n      newElement.value = elementText;\n    }\n  } else {\n    if (elementText !== \"\") {\n      const newElementData = document.createTextNode(elementText);\n      newElement.appendChild(newElementData); \n    }\n  }\n  if (classesToAdd !== \"\") {\n    newElement.className += classesToAdd;\n  }\n  if (attributesObj !== \"\") {\n    for (var key in attributesObj) {\n      newElement.setAttribute(key, attributesObj[key]);\n    }\n  }\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNewEl);\n\n//# sourceURL=webpack://to-do-list/./src/makeNewEl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;