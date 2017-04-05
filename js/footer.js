$(document).ready(function() {

    if ($("body").height() > $(window).height()) {
        $(window).scroll(function() {
            if ($(this).scrollTop() < 10) {
                $("#footer").hide();
            } else {
                jQuery("section:last-child").css({
                    "margin-bottom": $('footer').height() + 20
                });
                $("#footer").show();
            }
        });

        $("#footer").hide();
    } else {
        $("#footer").show();
    }


});
