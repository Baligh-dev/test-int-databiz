jQuery(function ($) {
  var swiper = new Swiper(".swiper-images", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
    },
  });
});
jQuery(function ($) {
  $(".menu-icon__box_inner").click(function () {
    $("body").find(".navbar_mobile").toggleClass("opened");
  });
});
jQuery(function ($) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) $(".to-top").fadeIn("slow");
    else $(".to-top").fadeOut("slow");
  });
});
