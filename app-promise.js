const axios = require('axios');
const yargs = require('yargs');
const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch the weather for',
      string: true
    }
})
.help()
.alias('help','h')
.argv;



if(argv.address === ""){
  let encodeAddress = encodeURIComponent('Halishahar');
  let geocodeUrl =  `https://geocoder.tilehosting.com/q/${encodeAddress}.js?key=8qjpR19QgBg4krCI5zho`;
  axios.get(geocodeUrl).then((response) => {
    var lat = response.data.results[0].lat;
    var lng = response.data.results[0].lon;
    var weatherUrl = `https://api.darksky.net/forecast/0957ddb79327c44cad96ea6964bd2f5c/${lat},${lng}`;
    global.f_address = response.data.results[0].display_name;
    console.log("default: ",f_address);
    return axios(weatherUrl);
  }).then((response) => {
    debugger;
    console.log(`It's currently ${response.data.currently.temperature} and it feels like ${response.data.currently.apparentTemperature}  in ${f_address}`);
  }).catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log(e.message);;
    }
  })
}else{
  let encodeAddress = encodeURIComponent(argv.address);
  let geocodeUrl =  `https://geocoder.tilehosting.com/q/${encodeAddress}.js?key=8qjpR19QgBg4krCI5zho`;
  axios.get(geocodeUrl).then((response) => {
    debugger;
    if(response.data.totalResults === 0){
      throw new Error(`Unable to find the address: ${argv.address}`);
    }else{
      var lat = response.data.results[0].lat;
      var lng = response.data.results[0].lon;
      var weatherUrl = `https://api.darksky.net/forecast/0957ddb79327c44cad96ea6964bd2f5c/${lat},${lng}`;
      global.formatted_address = response.data.results[0].display_name;
      console.log(formatted_address);
      return axios(weatherUrl);
    }
  }).then((response) => {
    console.log(`It's currently ${response.data.currently.temperature} and it feels like ${response.data.currently.apparentTemperature}  in ${formatted_address}`);
  }).catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to the API server');
    }else{
      console.log(e.message);
    }
  });

}
