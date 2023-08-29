
function clickTab(event) {

  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach(tab => tab.className = tab.className.replace("active", ""));

  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className += " active";
}

const element = document.getElementById("nav-container");

element.addEventListener("click", clickTab);








