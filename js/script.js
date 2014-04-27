(function() {
  $('a.box').click(function() {
    $('a.box').removeClass("active");
    return $(this).addClass("active");
  });

  $('.food').slick({
    autoplay: true
  });


}).call(this);
