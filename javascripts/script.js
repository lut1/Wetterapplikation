var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  jquery (".longitude").text(crd.longitude);
  jquery (".latitude").text(crd.latitude);
  jquery (".accuracy").text(crd.accuracy + ' meters.');

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);