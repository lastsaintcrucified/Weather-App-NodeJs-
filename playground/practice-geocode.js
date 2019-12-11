const request = require('request');
var geocode = (address,callback) => {
  var encodeAddress = encodeURIComponent(address);
  request({
    url:`https://geocoder.tilehosting.com/q/${encodeAddress}.js?key=8qjpR19QgBg4krCI5zho`,
    json: true

  },(error,response,body) => {
    if(!error && response.statusCode === 200){
      callback(undefined,(body.results[0]));
    }else{
      callback('Unable to fetch  weather',undefined);
    }

  });
};
  module.exports.geocode = geocode;
