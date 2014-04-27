$('a.box').click ->
	$('a.box').removeClass("active")
	$(@).addClass("active")

$('.food').slick (
  autoplay: true
)


