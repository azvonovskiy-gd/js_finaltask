"use strict";

var reviewSpan = document.querySelector(".review-span");
var reviewContainer = document.querySelector(".review-container");

function showReviewContainer() {
    reviewContainer.style.display = "block";
    reviewSpan.classList.remove("review-span");
}

reviewSpan.addEventListener('click', showReviewContainer);