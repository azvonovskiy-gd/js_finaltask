"use strict";

var imageElement = document.querySelector(".item-image");
var textElement = document.querySelector(".scrolling-text");
var leftArrow = document.querySelector(".scroll-image-left");
var rightArrow = document.querySelector(".scroll-image-right");
var overlayElement = document.querySelector(".magnifier-overlay");

var imagesArray = ["images/product/1.jpg",
    "images/product/2.jpg",
    "images/product/3.jpg"];

var currentImageIndex = 0;

function setNextImage() {
    imageElement.classList.remove('fadeOut');
    imageElement.classList.remove('fadeIn');
    imageElement.style.opacity = 1;
    if(currentImageIndex == 2) {
        currentImageIndex = 0;
    } else {
        ++currentImageIndex;
    }

    textElement.classList.add('moving-left');
    imageElement.classList.add('fadeOut');

    setTimeout(function () {
        imageElement.src = imagesArray[currentImageIndex];
        overlayElement.style.backgroundImage = "url('" + imagesArray[currentImageIndex] + "')";
        imageElement.classList.remove('fadeOut');
        imageElement.classList.add('fadeIn');
    }, 100);
}

function setPreviousImage() {
    imageElement.classList.remove('fadeOut');
    imageElement.classList.remove('fadeIn');
    if(currentImageIndex == 0) {
        currentImageIndex = 2;
    } else {
        --currentImageIndex;
    }

    imageElement.classList.add('fadeOut');

    setTimeout(function () {
        imageElement.src = imagesArray[currentImageIndex];
        overlayElement.style.backgroundImage = "url('" + imagesArray[currentImageIndex] + "')";
        imageElement.classList.remove('fadeOut');
        imageElement.classList.add('fadeIn');
    }, 100);
}

function zoomIn(event) {
    overlayElement.style.display = "inline-block";
    var posX = event.offsetX ? (event.offsetX) : event.pageX - imageElement.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - imageElement.offsetTop;
    overlayElement.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
}

function zoomOut() {
    overlayElement.style.display = "none";
}

leftArrow.addEventListener('click', setPreviousImage);
rightArrow.addEventListener('click', setNextImage);

imageElement.addEventListener('mousemove', zoomIn);
imageElement.addEventListener('mouseout', zoomOut);
