const request = require('request');
var geocodeAddress = (address,callback) => {
  var encodeAddress = encodeURIComponent(address);

   request({
     url: `https://geocoder.tilehosting.com/q/${encodeAddress}.js?key=8qjpR19QgBg4krCI5zho`,
     json: true
   },(error, response, body) => {
     if(error){
       callback('Unable to connect to the server',undefined);
     }else if (body.totalResults === 0) {
       callback('Unable to find desired addresss',undefined);
     }else if(body.totalResults > 0){
       callback(undefined,{
         address: body.results[0].display_name,
         latitude: body.results[0].lat,
         longitude: body.results[0].lon
       });
     }
   });
};
module.exports.geocodeAddress = geocodeAddress;


//0957ddb79327c44cad96ea6964bd2f5c
