// Hamburger
$('#hamburger').click(function (e) {
    if ($(this).hasClass("hamburger-active")) {
        $(this).removeClass("hamburger-active");
    }
    else {
        $(this).addClass("hamburger-active");
    }
});