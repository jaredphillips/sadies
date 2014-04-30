(function() {
  $('a.box').click(function() {
    $('a.box').removeClass("active");
    return $(this).addClass("active");
  });

  $('.food').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: false
  });

}).call(this);
