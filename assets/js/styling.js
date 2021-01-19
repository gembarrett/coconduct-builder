// this needs to be applied to textareas too
function resizingBoxes() {
  var boxes = document.querySelectorAll("textarea");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute('style', 'height:' + (boxes[i].scrollHeight) + 'px;overflow-x:hidden;');
    boxes[i].addEventListener("input", onInput, false);
  }
}

function onInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

var headChange = document.getElementById('head');
window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= headChange.offsetHeight ) {
        headChange.classList.add("nav-scroll");
        headChange.classList.remove("nav-start");
    }
    else {
        headChange.classList.add("nav-start");
        headChange.classList.remove("nav-scroll");
    }
};
