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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project (newProjId) {\n  this.id = newProjId,\n  this.title = \"\",\n  this.tasks = [],\n  this.collapsed = false,\n  this.visible = true,\n  this.data_type = \"project\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task (newTaskId) {\n  this.id = newTaskId,\n  this.text = \"\",\n  this.notes = \"\",\n  this.due_date = \"\",\n  this.checked = false,\n  this.priority = \"set\",\n  this.collapsed = false,\n  this.visible = true,\n  this.data_type = \"task\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\nconst ui = {\n  clearList(parentElement) {\n    while (parentElement.firstChild) {\n      parentElement.removeChild(parentElement.firstChild);\n    }\n  }\n}\n\nconst newProjBtn = document.getElementById(\"new-project-btn\");\nconst clearListBtn = document.getElementById(\"clear-list-btn\");\nconst content = document.getElementById(\"content\");\n\nnewProjBtn.addEventListener(\"click\", function() {\n  const newProjId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n  const newProj = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(newProjId);\n  _projectUI__WEBPACK_IMPORTED_MODULE_2__.default.addProjToDOM(newProj);\n  _data__WEBPACK_IMPORTED_MODULE_1__.default.addProjData(newProj);\n}, false);\n\nclearListBtn.addEventListener(\"click\", function() {\n  ui.clearList(content);\n}, false);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\n  getData() {\n    const storedData = JSON.parse(localStorage.getItem(\"to-do-data\") || \"[]\");\n    // console.log(storedData);\n    return storedData;\n  },\n  setData(newData) {\n    let storedData = this.getData();\n    storedData !== null ? localStorage.setItem(\"to-do-data\", JSON.stringify(newData)) : localStorage.setItem(\"to-do-data\", JSON.stringify([]));\n    storedData = this.getData();\n    return storedData;\n  },\n  addProjData(newData) {\n    let storedData = this.getData();\n    storedData !== null ? storedData.push(newData) : storedData = newData;\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n    storedData = this.getData();\n    return storedData;\n  },\n  updateProjectDataTitle(projectTitle, projectId) {\n    const storedData = this.getData();\n    const projIndex = this.findIndexOfProjectData(projectId);\n    storedData[projIndex].title = projectTitle;\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  },\n  deleteProjData(projectId){\n    const storedData = this.getData();\n    const projIndex = this.findIndexOfProjectData(projectId);\n    storedData.splice(projIndex, 1);\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  },\n  findProjectDataByID(projectId) {\n    const storedData = data.getData();\n    let foundProject = storedData.filter(project => project.id.toString() === projectId);\n    foundProject = foundProject[0];\n    return foundProject;\n  },\n  findIndexOfProjectData(projectId) {\n    const storedData = data.getData();\n    let foundIndex = storedData.findIndex(project => project.id === projectId);\n    return foundIndex;\n  },\n  findIndexOfTaskData(taskId, taskArray) {\n    let foundIndex = taskArray.findIndex(task => task.id === taskId);\n    return foundIndex;\n  },\n  addTaskData(newTask, projObj) {\n    const storedData = this.getData();\n    const foundIndex = this.findIndexOfProjectData(projObj.id);\n    storedData[foundIndex].tasks.push(newTask);\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  },\n  updateTaskData(changedTask, projObjId) {\n    const storedData = this.getData();\n    const projIndex = this.findIndexOfProjectData(projObjId);\n    // console.log(changedTask.id);\n    const taskIndex = this.findIndexOfTaskData(changedTask.getAttribute(\"data-task-id\"), storedData[projIndex].tasks);\n    const foundTask = storedData[projIndex].tasks[taskIndex];\n    console.log(foundTask);\n\n    foundTask.text = changedTask.querySelector(\".task__text-input\").value;\n    foundTask.notes = changedTask.querySelector(\".task__notes\").value;\n    foundTask.due_date = changedTask.querySelector(\".task__due-date\").value;\n    foundTask.checked = changedTask.querySelector(\".task__checkbox\").checked;\n    foundTask.priority = changedTask.querySelector(\".task__priority\").getAttribute(\"data-priority\");\n    foundTask.status = changedTask.classList;\n\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  },\n  deleteTaskData(taskId, projectId){\n    const storedData = this.getData();\n    const projIndex = this.findIndexOfProjectData(projectId);\n    const taskIndex = this.findIndexOfTaskData(taskId, storedData[projIndex].tasks);\n    storedData[projIndex].tasks.splice(taskIndex, 1);\n    localStorage.setItem(\"to-do-data\", JSON.stringify(storedData));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://to-do-list/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\n\nlet storedData = _data__WEBPACK_IMPORTED_MODULE_0__.default.getData();\nif (JSON.parse(localStorage.getItem(\"to-do-data\")) !== null && storedData.length !== 0) {\n  _projectUI__WEBPACK_IMPORTED_MODULE_3__.default.populateProjects(_data__WEBPACK_IMPORTED_MODULE_0__.default.getData());\n} else {\n  const newProjId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();\n  const newProj = new _Project__WEBPACK_IMPORTED_MODULE_1__.default(newProjId);\n  newProj.title = \"Starter Project\";\n\n  const taskList = [\"Update the project title\", \"Add a new task\", \"Update a task's information\", \"Delete a task\", \"Add a new project\", \"Delete a project\"];\n  for (let i=0; i < taskList.length; i++) {\n    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__.default((0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)());\n    newTask.text = taskList[i];\n    newProj.tasks.push(newTask);\n  }\n\n  _data__WEBPACK_IMPORTED_MODULE_0__.default.addProjData(newProj);\n  _projectUI__WEBPACK_IMPORTED_MODULE_3__.default.populateProjects(_data__WEBPACK_IMPORTED_MODULE_0__.default.getData());\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeNewEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewEl */ \"./src/makeNewEl.js\");\n/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskUI */ \"./src/taskUI.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\n\n\nconst projUI = {\n  populateProjects(allProjectData) {\n    for (const project of allProjectData) {\n      const newProjEl = this.addProjToDOM(project);\n      for (const task of project.tasks) {\n        _taskUI__WEBPACK_IMPORTED_MODULE_1__.default.addTaskToProjDOM(task, newProjEl);\n      }\n      newProjEl.querySelector(\".project__completed-count\").textContent = project.tasks.filter(task => task.checked === true).length;\n      newProjEl.querySelector(\".project__total-task-count\").textContent = project.tasks.length;\n    }\n  },\n  addProjToDOM(newProj) {\n    const newProjEl = this.createProjectEl(newProj);\n    content.appendChild(newProjEl);\n    newProjEl.querySelector(\".project__add-task-btn\").addEventListener(\"click\", function(e) {\n      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__.default((0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)());\n      _taskUI__WEBPACK_IMPORTED_MODULE_1__.default.addTaskToProj(newTask, e.target.closest(\".project\"));\n      // console.log(newTask);\n    }, false);\n    return newProjEl;\n  },\n  createProjectEl(newProj) {\n    // console.log(newProj);\n    let projectEl = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project\", \"\", {\n      \"data-project-id\": newProj.id,\n      \"data-project-title\": newProj.title\n    });\n    const projHeader = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project__header\", \"\", \"\");\n    const projectTitle = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"project__title\", newProj.title, {\n      \"type\": \"text\",\n      \"placeholder\": \"Project Title\"\n    });\n    const projHeaderRight = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project__btn-wrapper\", \"\", \"\");\n    const completedCounter = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project__completed-counter\", \"\", \"\");\n    const completedCount = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"project__completed-count\", \"0\", \"\");\n    const completedDivider = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"project__completed-count-divider\", \" of \", \"\");\n    const completedText = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"project__completed-text\", \" completed\", \"\");\n    const taskTotal = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"project__total-task-count\", \"0\", \"\");\n    const expandToggle = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"project__expand-toggle-btn\", \"Expand Toggle\", {\n      \"type\": \"button\"\n    });\n    const newTaskBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"project__add-task-btn\", \"Add Task\", {\n      \"type\": \"button\"\n    });\n    const deleteProjectBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"project__delete-project-btn\", \"Delete Project\", {\n      \"type\": \"button\"\n    });\n    projHeader.appendChild(projectTitle);\n    completedCounter.appendChild(completedCount);\n    completedCounter.appendChild(completedDivider);\n    completedCounter.appendChild(taskTotal);\n    completedCounter.appendChild(completedText);\n    projHeaderRight.appendChild(completedCounter);\n    projHeaderRight.appendChild(expandToggle);\n    projHeaderRight.appendChild(newTaskBtn);\n    projHeaderRight.appendChild(deleteProjectBtn);\n    projHeader.appendChild(projHeaderRight);\n    projectEl.appendChild(projHeader);\n\n    // ADD PROJECT EVENT LISTENERS\n    projectTitle.addEventListener(\"keyup\", e => {\n      projUI.handleProjKeyUp(e);\n    }, false);\n    expandToggle.addEventListener(\"click\", e => {\n      projUI.expandProjToggle(e.target.closest(\".project\"));\n    })\n    deleteProjectBtn.addEventListener(\"click\", e => {\n      projUI.handleProjDeleteClick(e);\n    }, false);\n\n    return projectEl;\n  },\n  updateCompletedTaskTotals(parentProj, numOfTotalTasks, numOfCompletedTasks) {\n    const completedNumEl = parentProj.querySelector(\".project__completed-count\");\n    const totalTaslNumEl = parentProj.querySelector(\".project__total-task-count\");\n    completedNumEl.textContent = numOfCompletedTasks;\n    totalTaslNumEl.textContent = numOfTotalTasks;\n  },\n  handleProjDeleteClick(e) {\n    if (confirm(\"Delete project?\")) {\n      const projectEl = e.target.closest(\".project\");\n      const projectElId = projectEl.getAttribute(\"data-project-id\");\n      \n      _data__WEBPACK_IMPORTED_MODULE_3__.default.deleteProjData(projectElId);\n      projectEl.remove();\n    }\n  },\n  handleProjKeyUp(e) {\n    window.clearTimeout(timer);\n    timer = window.setTimeout(() => {\n      const projectTitleEl = e.target;\n      // console.log(projectTitle);\n      const parentProjectId = projectTitleEl.closest(\".project\").getAttribute(\"data-project-id\");\n      const projectTitle = projectTitleEl.value;\n      // console.log(parentProjectId);\n        _data__WEBPACK_IMPORTED_MODULE_3__.default.updateProjectDataTitle(projectTitle, parentProjectId);\n    }, timeoutVal);\n  },\n  expandProj(element) {\n    const getHeight = () => {\n      const height = `${element.scrollHeight}px`;\n      return height;\n    };\n\n    const height = getHeight();\n    element.classList.add(\"expanded\");\n    element.style.height = height;\n\n    window.setTimeout(() => {\n      element.style.height = \"\";\n    }, 100);\n  },\n  collapseProj(element) {\n    element.style.height = `${element.scrollHeight}px`;\n    window.setTimeout(() => {\n      element.style.height = \"1.5rem\";\n    }, 100);\n    window.setTimeout(() => {\n      element.classList.remove(\"expanded\");\n    }, 100);\n  },\n  expandProjToggle(element) {\n    element.classList.contains(\"expanded\") ? this.collapseProj(element) : this.expandProj(element);\n  }\n};\n\nlet timer;\nconst timeoutVal = 750;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projUI);\n\n//# sourceURL=webpack://to-do-list/./src/projectUI.js?");

/***/ }),

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeNewEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewEl */ \"./src/makeNewEl.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n\n\nconst taskUI = {\n  createTaskEl(newTask) {\n    const task = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task\", \"\", {\n      \"data-task-id\": newTask.id\n    });\n    const topWrapper = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task__top-wrapper\", \"\", \"\");\n    const checkBox = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__checkbox\", \"\", {\n      \"type\": \"checkbox\"\n    });\n    checkBox.checked = newTask.checked;\n    checkBox.checked ? task.classList.add(\"completed\") : null;\n    const priorityText = newTask.priority.charAt(0).toUpperCase() + newTask.priority.slice(1);\n    const buttonText = newTask.priority === \"set\" ? `${priorityText} Priority` : priorityText;\n    const priority = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", `task__priority priority-${newTask.priority}`, buttonText, {\n      \"type\": \"button\",\n      \"data-priority\": newTask.priority\n    });\n    const input = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__text-input\", \"\", {\n      \"type\": \"text\",\n      \"placeholder\": \"New Task\"\n    });\n    input.value = newTask.text;\n    const dueDate = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"task__due-date\", \"\", {\n      \"type\": \"date\"\n    });\n    dueDate.value = newTask.due_date;\n    const notesBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"notes-btn\", \"notes\", {\n      \"type\": \"button\"\n    });\n    const deleteBtn = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"task__delete-btn\", \"delete\", {\n      \"type\": \"button\"\n    });\n    const bottomWrapper = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"task__bottom-wrapper\", \"\", \"\");\n    const notes = (0,_makeNewEl__WEBPACK_IMPORTED_MODULE_0__.default)(\"textarea\", \"task__notes\", \"\", {\n      \"placeholder\": \"Notes\"\n    });\n    notes.value = newTask.notes;\n    notes.value === \"\" ? notesBtn.classList.add(\"no-notes\") : notesBtn.classList.add(\"has-notes\");\n  \n    topWrapper.appendChild(checkBox);\n    topWrapper.appendChild(priority);\n    topWrapper.appendChild(input);\n    topWrapper.appendChild(dueDate);\n    topWrapper.appendChild(notesBtn);\n    topWrapper.appendChild(deleteBtn);\n    bottomWrapper.appendChild(notes);\n    task.appendChild(topWrapper);\n    task.appendChild(bottomWrapper);\n  \n    // ADD TASK EVENT LISTENERS\n    const addChangeListenerArray = [dueDate];\n    const addKeyUpListenerArray = [input, notes];\n\n    for (const element of addChangeListenerArray) {\n      element.addEventListener(\"change\", function(e) {\n        taskUI.handleTaskKeyUp(e);\n      }, false);\n    }\n    for (const element of addKeyUpListenerArray) {\n      element.addEventListener(\"keyup\", function(e) {\n        e.target.classList.contains(\"task__notes\") ? taskUI.updateNotesBtn(e) : null;\n        taskUI.handleTaskKeyUp(e);\n      }, false);\n    }\n    checkBox.addEventListener(\"click\", function(e) {\n      const clickedCheckBox = e.target;\n      taskUI.updateCompletedTasks(clickedCheckBox.closest(\".project\"));\n      clickedCheckBox.checked ? clickedCheckBox.closest(\".task\").classList.add(\"completed\") : clickedCheckBox.closest(\".task\").classList.remove(\"completed\");\n      taskUI.handleTaskKeyUp(e);\n    });\n    notesBtn.addEventListener(\"click\", function(e) {\n      console.log(\"CLICKD\");\n      const clickedBtn = e.target;\n      const bottomWrapper = clickedBtn.closest(\".task\").querySelector(\".task__bottom-wrapper\");\n      taskUI.expandTaskNotesToggle(bottomWrapper);\n      taskUI.handleTaskKeyUp(e);\n    }, false);\n    deleteBtn.addEventListener(\"click\", function(e) {\n      taskUI.handleTaskDeleteClick(e);\n    }, false);\n    priority.addEventListener(\"click\", function(e) {\n      taskUI.handleTaskPriorityClick(e);\n    }, false);\n  \n    return task;\n  },\n  addTaskToProjDOM(newTask, projectEl) {\n    const newTaskEl = this.createTaskEl(newTask);\n    projectEl.appendChild(newTaskEl);\n  },\n  addTaskToProj(newTask, projectEl) {\n    this.addTaskToProjDOM(newTask, projectEl);\n    const projId = projectEl.getAttribute(\"data-project-id\");\n    // console.log(`Project ID = ${projId}`);\n    const foundProject = _data__WEBPACK_IMPORTED_MODULE_1__.default.findProjectDataByID(projId);\n    _data__WEBPACK_IMPORTED_MODULE_1__.default.addTaskData(newTask, foundProject);\n    this.updateCompletedTasks(projectEl);\n  },\n  updateCompletedTasks(projectEl) {\n    const allTasks = projectEl.querySelectorAll(\".task\");\n    const numOfTasks = allTasks.length;\n    // console.log(`Total number of tasks: ${numOfTasks}`);\n    const completedTasks = [];\n    for (let task of allTasks) {\n      task.querySelector(\".task__checkbox\").checked === true ? completedTasks.push(task) : null;\n    }\n    const countOfCompleted = completedTasks.length;\n    // console.log(`Number of completed tasks: ${countOfCompleted}`);\n    _projectUI__WEBPACK_IMPORTED_MODULE_2__.default.updateCompletedTaskTotals(projectEl, numOfTasks, countOfCompleted);\n  },\n  handleTaskKeyUp(e) {\n    window.clearTimeout(timer);\n    timer = window.setTimeout(() => {\n      const clickedEl = e.target;\n      // console.log(clickedEl);\n      const elParentTask = e.target.closest(\".task\");\n      // console.log(elParentTask);\n      const parentProjectId = clickedEl.closest(\".project\").getAttribute(\"data-project-id\");\n      // console.log(parentProjectId);\n      _data__WEBPACK_IMPORTED_MODULE_1__.default.updateTaskData(elParentTask, parentProjectId);\n    }, timeoutVal);\n  },\n  handleTaskDeleteClick(e) {\n    if (confirm(\"Delete task?\")) {\n      const clickedEl = e.target;\n      const taskEl = e.target.closest(\".task\");\n      const taskId = taskEl.getAttribute(\"data-task-id\");\n      const projectEl = clickedEl.closest(\".project\");\n      const projectElId = projectEl.getAttribute(\"data-project-id\");\n      \n      _data__WEBPACK_IMPORTED_MODULE_1__.default.deleteTaskData(taskId, projectElId);\n      taskEl.remove();\n      this.updateCompletedTasks(projectEl);\n    }\n  },\n  handleTaskPriorityClick(e) {\n    const clickedEl = e.target;\n    const clickedElClasses = clickedEl.classList;\n    let priorityLevel;\n    if (clickedElClasses.contains(\"priority-set\")) {\n      clickedEl.classList.add(\"priority-low\");\n      clickedEl.classList.remove(\"priority-set\");\n      priorityLevel = \"low\";\n    } else if (clickedElClasses.contains(\"priority-low\")) {\n      clickedEl.classList.add(\"priority-medium\");\n      clickedEl.classList.remove(\"priority-low\");\n      priorityLevel = \"medium\";\n    } else if (clickedElClasses.contains(\"priority-medium\")) {\n      clickedEl.classList.add(\"priority-high\");\n      clickedEl.classList.remove(\"priority-medium\");\n      priorityLevel = \"high\";\n    } else if (clickedElClasses.contains(\"priority-high\")) {\n      clickedEl.classList.add(\"priority-set\");\n      clickedEl.classList.remove(\"priority-high\");\n      priorityLevel = \"set\";\n    }\n\n    let buttonText = priorityLevel === \"set\" ? `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)} Priority` : `${priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)}`;\n    clickedEl.textContent = buttonText;\n    clickedEl.setAttribute(\"data-priority\", priorityLevel);\n\n    const taskEl = e.target.closest(\".task\");\n    const projectEl = clickedEl.closest(\".project\");\n    const projectElId = projectEl.getAttribute(\"data-project-id\");\n    \n    _data__WEBPACK_IMPORTED_MODULE_1__.default.updateTaskData(taskEl, projectElId);\n  },\n  updateNotesBtn(e) {\n    if (e.target.classList.contains(\"task__notes\") && e.target.value.trim() !== \"\") {\n      e.target.closest(\".task\").querySelector(\".notes-btn\").classList.remove(\"no-notes\");\n      e.target.closest(\".task\").querySelector(\".notes-btn\").classList.add(\"has-notes\");\n    } else {\n      e.target.closest(\".task\").querySelector(\".notes-btn\").classList.remove(\"has-notes\");\n      e.target.closest(\".task\").querySelector(\".notes-btn\").classList.add(\"no-notes\");\n    }\n  },\n  expandTaskNotes(element) {\n    const getHeight = () => {\n      const height = `${element.scrollHeight}px`;\n      return height;\n    };\n\n    const height = getHeight();\n    element.classList.add(\"expanded\");\n    element.style.height = height;\n\n    window.setTimeout(() => {\n      element.style.height = \"\";\n    }, 100);\n  },\n  collapseTaskNotes(element) {\n    element.style.height = `${element.scrollHeight}px`;\n    window.setTimeout(() => {\n      element.style.height = \"0\";\n    }, 100);\n    window.setTimeout(() => {\n      element.classList.remove(\"expanded\");\n    }, 100);\n  },\n  expandTaskNotesToggle(element) {\n    element.classList.contains(\"expanded\") ? this.collapseTaskNotes(element) : this.expandTaskNotes(element);\n  }\n};\n\nlet timer;\nconst timeoutVal = 750;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskUI);\n\n//# sourceURL=webpack://to-do-list/./src/taskUI.js?");

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