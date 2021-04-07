var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'san francisco', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 
  console.log('Good Morning ' + result[0].location.name +', today temperature will be ' + result[0].current.temperature + 'C° and the sky will be ' + result[0].current.skytext);
});