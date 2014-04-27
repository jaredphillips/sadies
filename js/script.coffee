$('a.box').click ->
	$('a.box').removeClass("active")
	$(@).addClass("active")

$('.food').slick (
  autoplay: true,
  autoplaySpeed: 2300,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 2000
)


