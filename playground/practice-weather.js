const request = require('request');
var weatherA = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/0957ddb79327c44cad96ea6964bd2f5c/${lat},${lng}`,
    json: true
  },(error,response,body) => {
    if(!error && response.statusCode === 200){
      callback(undefined,(body.currently));
    }else{
      callback(('Unable to connect to the server'),undefined);
    }

  })
};
module.exports.weatherA = weatherA;
