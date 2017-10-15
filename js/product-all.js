"use strict";

var imageElement = document.querySelector(".item-image");
var leftArrow = document.querySelector(".scroll-image-left");
var rightArrow = document.querySelector(".scroll-image-right");

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

    imageElement.classList.add('fadeOut');
    var timer = setInterval(function () {imageElement.src = imagesArray[currentImageIndex];
        imageElement.classList.remove('fadeOut');
    clearInterval(timer)}, 1000);

    var timer2 = setInterval(function () {
        imageElement.classList.add('fadeIn');
        clearInterval(timer2);
    }, 1000);
}

function setPreviousImage() {
    if(currentImageIndex == 0) {
        currentImageIndex = 2;
    } else {
        --currentImageIndex;
    }

    imageElement.src = imagesArray[currentImageIndex];
}

leftArrow.addEventListener('click', setPreviousImage);
rightArrow.addEventListener('click', setNextImage);