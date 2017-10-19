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
    if(currentImageIndex === 2) {
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
    if(currentImageIndex === 0) {
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
    var zoom = window.outerWidth / window.document.documentElement.clientWidth;

    var posX = event.offsetX ? (event.offsetX) : event.pageX - imageElement.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - imageElement.offsetTop;

    if (posX > imageElement.clientWidth * 0.12 && posX < imageElement.clientWidth * 0.88
        && posY > imageElement.clientHeight * 0.3 && posY < imageElement.clientHeight * 0.7)
    {
        mouseOverlayElement.style.left = posX - mouseOverlayElement.clientWidth / 2 + "px";
        mouseOverlayElement.style.top = posY - mouseOverlayElement.clientHeight / 2 + "px";
    }

    mouseOverlayElement.style.width = magnifierOverlayElement.clientWidth / 1.4 + "px";
    mouseOverlayElement.style.height = magnifierOverlayElement.clientHeight / 1.4 + "px";
    mouseOverlayElement.style.display = "inline-block";

    magnifierOverlayElement.style.display = "inline-block";
    magnifierOverlayElement.style.backgroundPosition = (-posX * 1.1) * zoom + "px " + (-posY * 0.8) * zoom + "px";
}

function zoomOut() {
    magnifierOverlayElement.style.display = "none";
    mouseOverlayElement.style.display = "none";
}

leftArrow.addEventListener('click', setPreviousImage);
rightArrow.addEventListener('click', setNextImage);

imageElement.addEventListener('mousemove', zoomIn);
imageElement.addEventListener('mouseout', zoomOut);
