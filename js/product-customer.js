var productContent = document.querySelector(".product-content");
var buyLink = document.querySelector(".item-container-content .primary-btn");
var buyPopupWindow = document.querySelector(".admin-modal");

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.querySelector(".form-content .primary-btn");
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};