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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task (newTaskId) {\n  this.id = newTaskId,\n  this.text = \"\",\n  this.notes = \"\",\n  this.due_date = \"\",\n  this.checked = false,\n  this.color = \"white\",\n  this.status = \"\",\n  this.data_type = \"task\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataManagement */ \"./src/dataManagement.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\nconst ui = {\n  clearList(parentElement) {\n    while (parentElement.firstChild) {\n      parentElement.removeChild(parentElement.firstChild);\n    }\n  },\n  handleKeyUp(e) {\n    window.clearTimeout(timer);\n    timer = window.setTimeout(() => {\n      const clickedEl = e.target;\n      // console.log(clickedEl);\n      const elParentTask = e.target.closest(\".task\");\n      // console.log(elParentTask);\n      const parentProjectId = clickedEl.closest(\".project\").getAttribute(\"data-project-id\");\n      // console.log(parentProjectId);\n      _dataManagement__WEBPACK_IMPORTED_MODULE_1__.default.updateTask(elParentTask, parentProjectId);\n    }, timeoutVal);\n  }\n}\n\nlet timer;\nconst timeoutVal = 1000;\nconst newProjBtn = document.getElementById(\"new-project-btn\");\nconst clearListBtn = document.getElementById(\"clear-list-btn\");\nconst content = document.getElementById(\"content\");\n\nnewProjBtn.addEventListener(\"click\", function() {\n  const newProjId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n  const newProj = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(newProjId, \"New project\");\n  _projectUI__WEBPACK_IMPORTED_MODULE_2__.default.addProjToDOM(newProj);\n  _dataManagement__WEBPACK_IMPORTED_MODULE_1__.default.addProj(newProj);\n}, false);\n\nclearListBtn.addEventListener(\"click\", function() {\n  clearList(content);\n}, false);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/dataManagement.js":
/*!*******************************!*\
  !*** ./src/dataManagement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\n  getData() {\n    const storedData = JSON.parse(localStorage.getItem(\"to-do-data\") || \"[]\");\n    // console.log(storedData);\n    return storedData;\n  },\n  setData(newData) {\n    let storedData = this.getData();\n    storedData !== null ? localStorage.setItem(\"to-do-data\", JSON.stringify(newData)) : localStorage.setItem(\"to-do-data\", JSON.stringify([]));\n    storedData = this.getData();\n    return storedData;\n  },\n  addProj(newData) {\n    let storedData = this.getData();\n    storedData !== null ? storedData.push(newData) : storedData = newData;\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n    storedData = this.getData();\n    return storedData;\n  },\n  findProjectByID(projectId) {\n    const storedData = data.getData();\n    let foundProject = storedData.filter(project => project.id.toString() === projectId);\n    foundProject = foundProject[0];\n    return foundProject;\n  },\n  findIndexOfProject(projectId) {\n    const storedData = data.getData();\n    let foundIndex = storedData.findIndex(project => project.id === projectId);\n    return foundIndex;\n  },\n  findIndexOfTask(taskId, taskArray) {\n    let foundIndex = taskArray.findIndex(task => task.id === taskId);\n    return foundIndex;\n  },\n  addTask(newTask, projObj) {\n    const storedData = this.getData();\n    const foundIndex = this.findIndexOfProject(projObj.id);\n    storedData[foundIndex].tasks.push(newTask);\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  },\n  updateTask(changedTask, projObjId) {\n    const storedData = this.getData();\n    const projIndex = this.findIndexOfProject(projObjId);\n    console.log(changedTask.id);\n    const taskIndex = this.findIndexOfTask(changedTask.getAttribute(\"data-task-id\"), storedData[projIndex].tasks);\n    const foundTask = storedData[projIndex].tasks[taskIndex];\n    console.log(foundTask);\n\n    foundTask.text = changedTask.querySelector(\".task__text-input\").value;\n    foundTask.notes = changedTask.querySelector(\".task__notes\").value;\n    foundTask.due_date = changedTask.querySelector(\".task__due-date\").value;\n    foundTask.checked = changedTask.querySelector(\".task__checkbox\").checked;\n    foundTask.color = changedTask.querySelector(\".task__color-priority\").getAttribute(\"data-color\");\n    foundTask.status = changedTask.classList;\n\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://to-do-list/./src/dataManagement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManagement */ \"./src/dataManagement.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n\n\n\n_projectUI__WEBPACK_IMPORTED_MODULE_1__.default.populateProjects(_dataManagement__WEBPACK_IMPORTED_MODULE_0__.default.getData());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/makeNewEl.js":
/*!**************************!*\
  !*** ./src/makeNewEl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeNewEl = (elementType, classesToAdd, elementText, attributesObj) => {\n  let newElement = document.createElement(elementType);\n  if (elementType.indexOf(\"input\") > -1) {\n    if (elementText !== \"\") {\n      newElement.value = elementText;\n    }\n  } else {\n    if (elementText !== \"\") {\n      const newElementData = document.createTextNode(elementText);\n      newElement.appendChild(newElementData); \n    }\n  }\n  if (classesToAdd !== \"\") {\n    newElement.className += classesToAdd;\n  }\n  if (attributesObj !== \"\") {\n    for (var key in attributesObj) {\n      newElement.setAttribute(key, attributesObj[key]);\n    }\n  }\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNewEl);\n\n//# sourceURL=webpack://to-do-list/./src/makeNewEl.js?");

/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeNewEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewEl */ \"./src/makeNewEl.js\");\n/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskUI */ \"./src/taskUI.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\nconst projUI = {\n  populateProjects(allProjectData) {\n    for (const project of allProjectData) {\n      const newProjEl = this.addProjToDOM(project);\n      for (const task of project.tasks) {\n        _taskUI__WEBPACK_IMPORTED_MODULE_1__.default.addTaskToProjDOM(task, newProjEl);\n      }\n    }\n  },\n  addProjToDOM(newProj) {\n    const newProjEl = this.createProjectEl(newProj);\n    content.appendChild(newProjEl);\n    newProjEl.querySelector(\".project__add-task-btn\").addEventListener(\"click\", function(e) {\n      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__.default((0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)());\n      _taskUI__WEBPACK_IMPORTED_MODULE_1__.default.addTaskToProj(newTask, e.target.closest(\".project\"));\n      // console.log(newTask);\n    }, false);\n    return newProjEl;\n  },\n  createProjectEl(newProj) {\n    // console.log(newProj);\n    let projectEl = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project\", \"\", {\n      \"data-project-id\": newProj.id,\n      \"data-project-name\": newProj.name\n    });\n    const projectName = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"project__title\", \"New Project\", {\n      \"type\": \"text\",\n      \"placeholder\": \"Project name\"\n    });\n    const newTaskBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"project__add-task-btn\", \"Add Task\", {\n      \"type\": \"button\"\n    });\n    const deleteProjectBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"project__delete-project-btn\", \"Delete Project\", {\n      \"type\": \"button\"\n    });\n    projectEl.appendChild(projectName);\n    projectEl.appendChild(newTaskBtn);\n    projectEl.appendChild(deleteProjectBtn);\n    return projectEl;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projUI);\n\n//# sourceURL=webpack://to-do-list/./src/projectUI.js?");

/***/ }),

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeNewEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewEl */ \"./src/makeNewEl.js\");\n/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataManagement */ \"./src/dataManagement.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n\nconst taskUI = {\n  createTaskEl(newTask) {\n    const task = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task\", \"\", {\n      \"data-task-id\": newTask.id\n    });\n    const topWrapper = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task__top-wrapper\", \"\", \"\");\n    const checkBox = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__checkbox\", \"\", {\n      \"type\": \"checkbox\"\n    });\n    checkBox.checked = newTask.checked;\n    const colorPriority = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", `task__color-priority priority-${newTask.color}`, \"\", {\n      \"type\": \"button\",\n      \"data-color\": newTask.color\n    });\n    const input = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__text-input\", \"\", {\n      \"type\": \"text\",\n      \"placeholder\": \"New Task\"\n    });\n    input.value = newTask.text;\n    const dueDate = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__due-date\", \"\", {\n      \"type\": \"date\"\n    });\n    dueDate.value = newTask.due_date;\n    const deleteBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"task__delete-btn\", \"delete\", {\n      \"type\": \"button\"\n    });\n    const bottomWrapper = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task__bottom-wrapper\", \"\", \"\");\n    const notes = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"textarea\", \"task__notes\", \"\", {\n      \"placeholder\": \"Notes\"\n    });\n    notes.value = newTask.notes;\n  \n    topWrapper.appendChild(checkBox);\n    topWrapper.appendChild(colorPriority);\n    topWrapper.appendChild(input);\n    topWrapper.appendChild(dueDate);\n    topWrapper.appendChild(deleteBtn);\n    bottomWrapper.appendChild(notes);\n    task.appendChild(topWrapper);\n    task.appendChild(bottomWrapper);\n  \n    // ADD TASK EVENT LISTENERS\n    const addChangeListenerArray = [checkBox, colorPriority, dueDate];\n    const addKeyUpListenerArray = [input, notes];\n    for (const element of addChangeListenerArray) {\n      element.addEventListener(\"change\", function(e) {\n        _UI__WEBPACK_IMPORTED_MODULE_2__.default.handleKeyUp(e);\n      }, false);\n    }\n    for (const element of addKeyUpListenerArray) {\n      element.addEventListener(\"keyup\", function(e) {\n        _UI__WEBPACK_IMPORTED_MODULE_2__.default.handleKeyUp(e);\n      }, false);\n    }\n  \n    return task;\n  },\n  addTaskToProjDOM(newTask, projectEl) {\n    const newTaskEl = this.createTaskEl(newTask);\n    projectEl.appendChild(newTaskEl);\n  },\n  addTaskToProj(newTask, projectEl) {\n    const newTaskEl = this.createTaskEl(newTask);\n    projectEl.appendChild(newTaskEl);\n    const projId = projectEl.getAttribute(\"data-project-id\");\n    // console.log(`Project ID = ${projId}`);\n    const foundProject = _dataManagement__WEBPACK_IMPORTED_MODULE_1__.default.findProjectByID(projId);\n    _dataManagement__WEBPACK_IMPORTED_MODULE_1__.default.addTask(newTask, foundProject);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskUI);\n\n//# sourceURL=webpack://to-do-list/./src/taskUI.js?");

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