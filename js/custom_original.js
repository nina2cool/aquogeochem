// (function($) {

    // jQuery(document).ready(function() {

        //lightbox
        // $(document).ready(function() {
        //     $('a').nivoLightbox();
        // });
        // //this code for the scroll animation
        // $(document).ready(function() {
        //     $(document).on("scroll", onScroll);
        //
        //     //smoothscroll
        //     $('a[href^="#"]').on('click', function(e) {
        //         e.preventDefault();
        //         $(document).off("scroll");
        //
        //         $('a').each(function() {
        //             $(this).removeClass('active');
        //         })
        //         $(this).addClass('active');
        //
        //         var target = this.hash,
        //             menu = target;
        //         $target = $(target);
        //         $('html, body').stop().animate({
        //             'scrollTop': $target.offset().top + 2
        //         }, 500, 'swing', function() {
        //             window.location.hash = target;
        //             $(document).on("scroll", onScroll);
        //             // onScroll();
        //         });
        //     });
        // });


        // $(document).ready(function() {
        //
        //     checkWindow();
        //
        //     $(window).resize(function() {
        //         checkWindow();
        //     });
        //
        //
        // });


        // var checkWindow = function() {
        //
        //     // Check if body height is higher than window height :)
        //     if ($("body").height() > $(window).height()) {
        //         $(window).scroll(function() {
        //             if ($(this).scrollTop() < 10) {
        //                 $("#footer").hide();
        //             } else {
        //                 jQuery("section:last-child").css({
        //                     "margin-bottom": $('footer').height() + 20
        //                 });
        //                 $("#footer").show();
        //             }
        //         });
        //
        //         $("#footer").hide();
        //     } else {
        //         $("#footer").show();
        //     }
        //
        //     // Check if body width is higher than window width :)
        //     // if ($("body").width() > $(window).width()) {
        //     //     console.log("Horizontal Scrollbar! D:<");
        //     // }
        //
        // };

        // function onScroll(event) {
        //
        //     var windowScrollPosTop = jQuery(window).scrollTop();
        //
        //     if (windowScrollPosTop >= 200) {
        //         jQuery(".top-header-home").css({
        //             "background": "#2f466c"
        //         });
        //     } else {
        //         jQuery(".top-header-home").css({
        //             "background": "transparent"
        //         });
        //     };
        //
        //     // var documentHeight = Math.ceil($(document).height());
        //     // var bodyHeight = Math.ceil($('body').height());
        //     // var contentHeight = Math.ceil($('.content').height());
        //     // var headerHeight = Math.ceil($('header').height());
        //     // var footerHeight = Math.ceil($('footer').height());
        //
        //     // If you have to scroll to see the content, then show the footer when you get to the end.  if the content fills the page, then show it right away.
        //     //
        //     // console.log('document height = ' + documentHeight);
        //     // console.log('body height = ' + bodyHeight);
        //     // console.log('content height = ' + contentHeight);
        //     // console.log('header height = ' + headerHeight);
        //     // console.log('footer height = ' + footerHeight);
        //     //
        //     // if ((contentHeight + headerHeight) > documentHeight) {
        //     //
        //     //     $(window).scroll(function() {
        //     //         if ($(this).scrollTop() < 2) {
        //     //             $("#footer").hide();
        //     //         } else {
        //     //             jQuery("section").css({
        //     //                 "margin-bottom": $('footer').height() + 20
        //     //             });
        //     //             $("#footer").show();
        //     //         }
        //     //     });
        //     //
        //     // } else {
        //     //     $("#footer").show();
        //     // };
        //
        // }


        //Date functionality for displaying the copyright date in the footer
        //Enter the starting date for the copyright
        var startDate = 2016;

        // returns the current year
        var currentYearDate = new Date().getFullYear();

        //if the current year matches the starting date, then only display the current year.
        //if the start date is prior to the current year, show both dates with a dash

        if (currentYearDate === startDate) {
            $('#currentYear').text(currentYearDate);
        } else {
            $('#currentYear').text(startDate + '-' + currentYearDate);
        }


        // Expand all , collapse all functionality on prior projects page
        $('.closeall').click(function(){
          $('.panel-collapse.in')
            .collapse('hide');
        });
        $('.openall').click(function(){
          $('.panel-collapse:not(".in")')
            .collapse('show');
        });




    // });

// })(jQuery);
