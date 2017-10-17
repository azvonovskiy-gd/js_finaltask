"use strict";

var overlayElement = document.querySelector(".magnifier-overlay");
var imageElement = document.querySelector(".item-image");

alert(imageElement.style.width);

function zoomIn(event) {
    overlayElement.style.display = "inline-block";
    var posX = event.offsetX ? (event.offsetX) : event.pageX - imageElement.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - imageElement.offsetTop;
    overlayElement.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
}

function zoomOut() {
    overlayElement.style.display = "none";
}

//img.addEventListener('mousemove', zoomIn(event));
//img.addEventListener('mouseout', zoomOut());
