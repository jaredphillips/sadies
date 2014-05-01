(function() {
  $('a.page-link').click(function() {
    $('a.page-link').removeClass("active");
    return $(this).addClass("active");
  });

  $('.foot-left-bird').hover(function() {
    return $('.foot-left-bird').addClass('fly');
  });

  $('.food').slick({
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: false
  });

}).call(this);
