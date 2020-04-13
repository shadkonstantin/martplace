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

    $('.weekly__inner').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: "<button class='slick-prev arrows icon-angle-left weekly-arrow__left'></button>",
        nextArrow: "<button class='slick-next arrows icon-angle-right weekly-arrow__right'></button>"

    });

});