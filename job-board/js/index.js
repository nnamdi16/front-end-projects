function menuDisplay(event) {
  let headerTab = document.getElementsByClassName("header-tab");
  for (let index = 0; index < headerTab.length; index++) {
    headerTab[index].className = headerTab[index].className.replace(
      "active",
      ""
    );
  }

  event.currentTarget.className += " active";

}
