/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// toggle brand image visibility when navbar reaches top
(function () {
    var $navbar = $(".navbar");
    if ($navbar.length === 0) {
        return;
    }
    var stuckAt = 0;

    function recalcStuckPoint() {
        var dataOffset = parseInt($navbar.attr("data-offset-top"), 10);
        if (!isNaN(dataOffset)) {
            stuckAt = dataOffset;
            return;
        }
        stuckAt = $navbar.offset().top;
    }

    function toggleStuckClass() {
        var y = $(window).scrollTop();
        $navbar.toggleClass("is-stuck", y >= stuckAt);
    }

    $(window).on("load resize", function () {
        recalcStuckPoint();
        toggleStuckClass();
    });

    $(window).on("scroll", toggleStuckClass);
})();

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});
