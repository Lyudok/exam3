
$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 2000,
});


$('.work-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});




$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 2000);
	});
});



// Initialize and add the map
function initMap() {
	// The location of Uluru
	var uluru = { lat: 49.411791, lng: 32.021873 };
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), { zoom: 17, center: uluru });
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: uluru, map: map });
}








