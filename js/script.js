(function() {
  $('a.nav-link').click(function() {
    $('a.nav-link').removeClass("active");
    return $(this).addClass("active");
  });

  $('.slider-class').slick({
    name: value
  });

}).call(this);
