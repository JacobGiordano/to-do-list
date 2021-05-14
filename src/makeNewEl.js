const makeNewEl = (elementType, classesToAdd, elementText, attributesObj) => {
  let newElement = document.createElement(elementType);
  if (elementType.indexOf("input") > -1) {
    if (elementText !== "") {
      newElement.value = elementText;
    }
  } else {
    if (elementText !== "") {
      const newElementData = document.createTextNode(elementText);
      newElement.appendChild(newElementData); 
    }
  }
  if (classesToAdd !== "") {
    newElement.className += classesToAdd;
  }
  if (attributesObj !== "") {
    for (var key in attributesObj) {
      newElement.setAttribute(key, attributesObj[key]);
    }
  }
  return newElement;
}

export default makeNewEl;