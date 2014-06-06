var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  jQuery (".longitude").text(crd.longitude);
  jQuery (".latitude").text(crd.latitude);
  jQuery (".accuracy").text(crd.accuracy + ' m');


  	jQuery.ajax({
	  	url: 'https://api.forecast.io/forecast/2440fc192add591a5ce89da2c8939529/' + crd.latitude +',' + crd.longitude,
	  	data: {
	  		units : 'si'
	  	},
	  	dataType: 'jsonp',
	  	success: function(data) {
	  		  jQuery (".temperature").text(data.currently.apparentTemperature + ' °C');
	  		  jQuery (".windspeed").text(data.currently.windSpeed + ' m/h');
	  	console.log(data);
	  	}
  	});

  	jQuery.ajax({
	  	url: 'https://maps.googleapis.com/maps/api/geocode/json',
	  	data: {
	  		latlng: crd.latitude +',' + crd.longitude,
	  		sensor: true
	  	},
	  	success: function(data) {
	  		var firstaddress = data.results[0];
	  		jQuery(".address").text(firstaddress.formatted_address);
	  		console.log(data);

	  	}
  	});

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


jQuery(' .custom-address').on('click', 'a', function(event){
	event.preventDefault();

	var address = jQuery('input', ' .custom-address').val();

	jQuery.ajax({
  	url: 'http://maps.googleapis.com/maps/api/geocode/json',
  	data: {
  		address: address,
  		sensor: false
  	},
	  success: function(data) {
	  	console.log(data);
	  	jQuery(' .custom-address-result').text(data.results[0].geometry.location.lat + ',' + data.results[0].geometry.lng);

	  }  		
  });
});


