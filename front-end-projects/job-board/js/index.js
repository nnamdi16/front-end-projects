/**
 *
 * @param {*} event
 */
function menuDisplay(event) {
  let headerTab = document.getElementsByClassName("header-tab");
  for (let index = 0; index < headerTab.length; index++) {
    headerTab[index].className = headerTab[index].className.replace(
      "active",
      ""
    );
    removeActiveMenuImage("header-active");
  }

  event.currentTarget.className += " active";
  document
    .getElementsByClassName("active")[0]
    .appendChild(addActiveMenuImage());
}

/**
 * Adds div with an image when the menu is active
 */
function addActiveMenuImage() {
  const div = document.createElement("div");
  div.className = "header-active";
  div.innerHTML = `<img src="./img/menu-ellipse.svg" />`;
  console.log("div created");
  return div;
}

/**
 *Removes div when the menu is inactive
 * @param {String} className
 */
function removeActiveMenuImage(className) {
  let element = document.getElementsByClassName(className);
  while (element.length > 0) {
    element[0].parentNode.removeChild(element[0]);
  }
}
