var productContent = document.querySelector(".product-content");
var buyLink = document.querySelector(".item-container-content .primary-btn");
var buyPopupWindow = document.querySelector(".admin-modal");
var nameInput = document.querySelector(".name-input");
var nameSpan = document.querySelector(".username-span");
var avatarInput = document.querySelector(".avatar-input");
var avatarElem = document.querySelector(".avatar");
var avatarFile = document.querySelector(".avatar-file");

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.querySelector(".form-content .primary-btn");
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

nameInput.addEventListener('keyup', function () {
    var text = nameInput.value;
    if (text == '') {
        text = 'Your Name';
    }
    nameSpan.innerHTML = text;
});

avatarInput.onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    var fr = new FileReader();
    fr.onload = function () {
        avatarElem.src = fr.result;
        avatarFile.src = fr.result;
    };
    fr.readAsDataURL(files[0]);
};