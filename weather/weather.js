const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/0957ddb79327c44cad96ea6964bd2f5c/${lat},${lng}`,
    json: true
  },(error,response,body) => {
    if(!error && response.statusCode === 200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else{
      callback('unable to fetch weather',undefined);
    }
  });
}

module.exports.getWeather = getWeather;
