$(document).ready(function() {
    $('.navbar-item').hover(
        function() {
            $(this).find('.dropdown-content').stop(true, true).slideDown('fast');
        },
        function() {
            $(this).find('.dropdown-content').stop(true, true).slideUp('fast');
        }
    );
});