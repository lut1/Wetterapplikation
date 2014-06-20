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
		localStorage.setItem('language', 'de');
	}

	var getAddress = function(pos) {
		if (typeof pos !== 'undefined') {
			window.crd=pos.coords;
			localStorage.setItem('position', JSON.stringify(pos.coords));

		} 

		console.log(localStorage.getItem('positon'));

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
		console.log($(this).val());

		localStorage.getItem()
		localStorage.setItem()

		localStorage['language'] = $(this).val();

		getAddress();



	});
});