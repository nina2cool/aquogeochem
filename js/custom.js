$(document).ready(function() {

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

    // start off with all collapsed
    $('.panel-collapse.in').collapse('hide');

    // Expand all , collapse all functionality on prior projects page
    $('.closeall').click(function() {
        $('.panel-collapse.in')
            .collapse('hide');
    });
    $('.openall').click(function() {
        $('.panel-collapse:not(".in")')
            .collapse('show');
    });

    // based on what was clicked on the expertise page, open the corresponding accordion panel on the prior_projects page
    var hash = window.location.hash;

    if (hash == "#karstPanel") {
        $('#collapseFive').addClass('in');
    } else if (hash == "#toxicPanel") {
        $('#collapseOne').addClass('in');
    } else if (hash == "#microbiologyPanel") {
        $('#collapseEight').addClass('in');
    } else if (hash == "#biodegredationPanel") {
        $('#collapseTwo').addClass('in');
    }

});
