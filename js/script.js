(function() {
  $('a.box').click(function() {
    $('a.box').removeClass("active");
    return $(this).addClass("active");
  });

  $('.food').slick({
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000
  });

}).call(this);
