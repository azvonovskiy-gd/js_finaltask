"use strict";

var imageElement = document.querySelector(".item-image");
var textElement = document.querySelector(".scrolling-text");
var leftArrow = document.querySelector(".scroll-image-left");
var rightArrow = document.querySelector(".scroll-image-right");
var magnifierOverlayElement = document.querySelector(".magnifier-overlay");
var mouseOverlayElement = document.querySelector(".pointer-magnifier-overlay");

var imagesArray = ["images/product/1.jpg",
    "images/product/2.jpg",
    "images/product/3.jpg"];

var imageTextArray = ["Active Coat Lorem Dolor Sit Amet",
    "Consectetur Adipisicing Elit.",
    "Adipisci aperiam, libero aliquid architecto"];

var currentImageIndex = 0;

function setNextImage() {
    imageElement.classList.remove('fadeOut');
    imageElement.classList.remove('fadeIn');
    imageElement.style.opacity = 1;
    if (currentImageIndex === 2) {
        currentImageIndex = 0;
    } else {
        ++currentImageIndex;
    }

    textElement.classList.add('moving-left');
    imageElement.classList.add('fadeOut');

    setTimeout(function () {
        imageElement.src = imagesArray[currentImageIndex];
        textElement.textContent = imageTextArray[currentImageIndex];
        magnifierOverlayElement.style.backgroundImage = "url('" + imagesArray[currentImageIndex] + "')";
        imageElement.classList.remove('fadeOut');
        imageElement.classList.add('fadeIn');
        textElement.classList.remove('moving-left');
    }, 100);
}

function setPreviousImage() {
    imageElement.classList.remove('fadeOut');
    imageElement.classList.remove('fadeIn');
    if (currentImageIndex === 0) {
        currentImageIndex = 2;
    } else {
        --currentImageIndex;
    }

    textElement.classList.add('moving-right');
    imageElement.classList.add('fadeOut');

    setTimeout(function () {
        imageElement.src = imagesArray[currentImageIndex];
        textElement.textContent = imageTextArray[currentImageIndex];
        magnifierOverlayElement.style.backgroundImage = "url('" + imagesArray[currentImageIndex] + "')";
        imageElement.classList.remove('fadeOut');
        imageElement.classList.add('fadeIn');
        textElement.classList.remove('moving-right');
    }, 100);
}

function zoomIn(event) {
    var boostX = imageElement.naturalWidth / imageElement.clientWidth;
    var boostY = imageElement.naturalHeight / imageElement.clientHeight;

    var posX = event.offsetX ? (event.offsetX) : event.pageX - imageElement.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - imageElement.offsetTop;
    var zoomerWidth = magnifierOverlayElement.clientWidth / boostX;
    var zoomerHeight = magnifierOverlayElement.clientHeight / boostY;

    mouseOverlayElement.style.width = zoomerWidth + "px";
    mouseOverlayElement.style.height = zoomerHeight + "px";
    mouseOverlayElement.style.display = "inline-block";

    magnifierOverlayElement.style.display = "inline-block";

    if (posX > zoomerWidth / 2 && posX < imageElement.clientWidth - zoomerWidth / 2) {
        mouseOverlayElement.style.left = posX - mouseOverlayElement.clientWidth / 2 + "px";
        magnifierOverlayElement.style.backgroundPositionX = -posX * boostX + zoomerWidth + "px";
    }
    if (posY > zoomerHeight / 2 && posY < imageElement.clientHeight - zoomerHeight / 2) {
        mouseOverlayElement.style.top = posY - mouseOverlayElement.clientHeight / 2 + "px";
        magnifierOverlayElement.style.backgroundPositionY = -posY * boostY + zoomerHeight + "px";
    }
}

function zoomOut() {
    magnifierOverlayElement.style.display = "none";
    mouseOverlayElement.style.display = "none";
}

leftArrow.addEventListener('click', setPreviousImage);
rightArrow.addEventListener('click', setNextImage);

imageElement.addEventListener('mousemove', zoomIn);
imageElement.addEventListener('mouseout', zoomOut);
