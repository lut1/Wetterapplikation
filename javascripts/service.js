$(document).ready(function() {
	var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
	};

	$.ajax({
		url: 'https://maps.googleapis.com/maps/api/geocode/json',
		data: {
			latlng: crd.latitude + ',' + crd.longitude,
			sensor: true
		},
		success: function(data) {
			$('.js-address').text(data.results[0].formatted_address);
		}
	});
	

	var success = function(pos) {
		var crd = pos.coords;

  	$(' .current-position').text(crd.latitude + ', ' + crd.longitude);
	)};

	var error = function() {
		 console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
});


