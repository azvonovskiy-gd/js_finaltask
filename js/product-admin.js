var productContent = document.querySelector(".product-content");
var editLink = document.querySelector(".edit-link");
var deleteLink = document.querySelector(".delete-link");
var buyLink = document.querySelector(".item-container-content .btn");
var productPopupWindow = document.querySelector(".product-popup");
var deletePopupWindow = document.querySelector(".delete-popup");
var buyPopupWindow = document.querySelector(".buy-popup");

editLink.onclick = function () {
    productContent.classList.toggle('blur');
    productPopupWindow.classList.toggle('popup-overlay-visible');
};

deleteLink.onclick = function () {
    productContent.classList.toggle('blur');
    deletePopupWindow.classList.toggle('popup-overlay-visible');
};

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.onclick = function () {
    productContent.classList.toggle('blur');
    productPopupWindow.classList.toggle('popup-overlay-visible');
};

var cancelDeletionBtn = document.querySelector(".cancel-deletion-btn");
cancelDeletionBtn.onclick = function () {
    productContent.classList.toggle('blur');
    deletePopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.querySelector(".continue-shopping-btn");
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

/* Custom dropdown */
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text().replace('✓', '');
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}


$(function () {
    var dd = new DropDown($('.wear-dropdown'));
    var dd2 = new DropDown($('.rating-dropdown'));

    $(document).click(function () {
        // all dropdowns
        $('.form-dropdown').removeClass('active');
    });

});