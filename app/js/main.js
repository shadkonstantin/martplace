$(function () {
    $(".icon-angle-down").on("click", function () {
        $(".category-list ul").slideToggle();
    });
    $(".weekly__item-star").rateYo({
        starWidth: "14px",
        rating: 4.5,
        numStars: 5,
        readOnly: true
    });
    $(".newest__item-star").rateYo({
        starWidth: "14px",
        rating: 4.5,
        numStars: 5,
        readOnly: true
    });


    $('.weekly__inner').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: "<button class='slick-prev arrows icon-angle-left weekly-arrow__left'></button>",
        nextArrow: "<button class='slick-next arrows icon-angle-right weekly-arrow__right'></button>"

    });

    $('.followers__inner').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        prevArrow: "<button class='slick-prev arrows icon-angle-left weekly-arrow__left'></button>",
        nextArrow: "<button class='slick-next arrows icon-angle-right weekly-arrow__right'></button>"
    });

    $(".range-slider").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });


    $(".view-list__icon").on("click", function () {
        $(".newest__item").addClass('list');
        $(this).addClass('active');
        $('.view-grid__icon').removeClass('active');

    });
    $(".view-grid__icon").on("click", function () {
        $(".newest__item").removeClass('list');
        $(this).addClass('active');
        $('.view-list__icon').removeClass('active');
    });

    $(".aside__title-btn--category").on("click", function () {
        $(".aside__list-category").slideToggle();
        $(this).toggleClass('rotate180');
    });
    $(".aside__title-btn--filter").on("click", function () {
        $(".aside__list-filter").slideToggle();
        $(this).toggleClass('rotate180');
    });

    $(".header__top-button").on("click", function () {
        $(".header__top-box").toggleClass('header__top-box--active');
    });

    $(".menu__burger").on("click", function () {
        $(".menu__list").slideToggle();
    });
    $(".header__top-info").on("click", function () {
        $(".header__dropmenu-user").toggleClass('header__dropmenu-user--active');
    });
    $(".shop-box").on("click", function () {
        $(".shop-menu").toggleClass('shop-menu--active');
    });

    $(window).on("load", function () {
        if ($('.newest__inner').length) {
            var mixer = mixitup('.newest__inner');
        }
    });

});