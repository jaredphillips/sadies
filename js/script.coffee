$('a.page-link').click ->
	$('a.page-link').removeClass("active")
	$(@).addClass("active")

$(".fancybox").attr("rel", "gallery").fancybox padding: 0
	
$('.foot-left-bird').hover ->
	$('.foot-left-bird').addClass('fly')

$('.food').slick (
  autoplay: true,
  autoplaySpeed: 2300,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 2000,
  pauseOnHover: false
)

$('.artists').slick(
  centerMode: true
)



