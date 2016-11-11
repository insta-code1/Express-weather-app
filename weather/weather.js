const request = require('request');

var getWeather = (lng, lat, callback) => {
  request({
    url: `https://api.darksky.net/forecast/769d462a48ab3ad11854c6c2a2827f00/${lng},${lat}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io servers');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        'Current Summary': body.currently.summary,
        'Current temperature': body.currently.temperature,
        'Current pressure is': body.currently.pressure,
        'Current wind speed is': body.currently.windSpeed,
        'Current wind bearing': body.currently.windBearing,
      });
    }
  });
};

module.exports.getWeather = getWeather;