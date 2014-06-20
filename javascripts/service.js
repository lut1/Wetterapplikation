$(document).ready(function() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	// window.test=1; // Globale Variable deklarieren


	// Default Sprache einstellen
	if(localStorage.getItem('language') === null) {
		localStorage.setItem('language', 'de');
	}

	// Default Position setzen
	if (localStorage.getItem('position') === null) {
		localStorage.setItem('position', null);
	}

	var getAddress = function(pos) {
		if (typeof pos != null) {
			localStorage.setItem('position', JSON.stringify(pos.coords));
		} 

		var crd = JSON.parse(localStorage.getItem('position'));


		console.log(localStorage.getItem('positon'));
		console.log(JSON.parse(localStorage.getItem('positon'));


		$.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json',
			data: {
				latlng: crd.latitude + ',' + crd.longitude,
				sensor: true,
				language: localStorage['localStorage']
			},
			success: function(data) {
				$('.js-current-address').text(data.results[0].formatted_address);
			}
		});

		$('.js-current-position').text(crd.latitude + ', ' + crd.longitude);
	};

	var error = function(err) {
		console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(getAddress, error, options);

	$(document).on('change', ' .js-language', function() {
		localStorage['language'] = $(this).val();

		var pos= JSON.parse(localStorage.getItem('position'));

		getAddress(pos);



	});
});