var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Paris', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
  var valWeather = JSON.stringify(result, null, 2).split('skytext": "')[1].split('"')[0];
  var valTemper = JSON.stringify(result, null, 2).split('temperature": "')[1].split('"')[0];
  console.log('Weather: ' + valWeather + '\nTemp(C): ' + valTemper);
});
