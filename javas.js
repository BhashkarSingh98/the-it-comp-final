$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('ul').toggleClass('show');

    });
});
$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $(".menu-toggle").toggleClass('active');
    });
});
$(document).ready(function () {
    $('.dropdown1').click(function () {
        $('.dropdown').toggle();

    });
});