const request = require('request');
var geocodeAddress = (address) => {
  return new Promise((resolve,reject) => {
    var encodeAddress = encodeURIComponent(address);
    request({
      url: `https://geocoder.tilehosting.com/q/${encodeAddress}.js?key=8qjpR19QgBg4krCI5zho`,
      json: true
    },(error,response,body) => {
      if(error){
        reject('Unable to connect to the server');
      }else if(body.totalResults === 0){
        reject('unable to find the address');
      }else {
        resolve({
          address: body.results[0].display_name,
          latitude: body.results[0].lat,
          longitude: body.results[0].lon
        });
      }
    })
  });
};
geocodeAddress('Halishahar Chittagong').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
},(errorMessage) => {
  console.log(errorMessage);
})
