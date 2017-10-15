$(function () {
    $("#price-slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#price-slider-range").find("span.ui-slider-handle").each(function (index) {
                $(this).html("<b>" + ui.values[index] + "</b>");
            });
        }
    });
    $("#price-slider-range").find("span.ui-slider-handle")[0].innerHTML = "<b>" + 75 + "</b>";
    $("#price-slider-range").find("span.ui-slider-handle")[1].innerHTML = "<b>" + 300 + "</b>";

});

$(function () {
    $('#rating-slider-range').slider({
        range: true,
        min: 0,
        max: 5,
        values: [0, 2],
        slide: function (event, ui) {
            $('#rating-slider-range').find("span.ui-slider-handle").each(function (index) {
                $(this).html("<b>" + ui.values[index] + "</b>");
            });
        }
    });
    $('#rating-slider-range').find("span.ui-slider-handle")[0].innerHTML = "<b>" + 0 + "</b>";
    $('#rating-slider-range').find("span.ui-slider-handle")[1].innerHTML = "<b>" + 2 + "</b>";
});

var overlay = document.querySelector(".popup-overlay");
var filterBtn = document.querySelector(".filter-row .btn");

filterBtn.onclick = function () {
    overlay.classList.toggle('popup-overlay-visible');
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
    var dd = new DropDown($('.form-dropdown'));

    $(document).click(function () {
        // all dropdowns
        $('.form-dropdown').removeClass('active');
    });

});