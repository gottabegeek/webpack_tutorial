import _ from "lodash";
// import './assets/styles/style.css';

function element() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack.", "This is cool!"], " ");
  return element;
}

document.body.appendChild(element());