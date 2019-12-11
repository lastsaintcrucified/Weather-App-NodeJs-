const yargs = require('yargs');
const geocodeAddress = require('./practice-geocode');
const weather = require('./practice-weather');
const argv = yargs
.options({
  a:{
    alias: 'address',
    demand: true,
    describe: 'Give the address of the location',
    string: true
  }
})
.help()
.alias('help','h')
.argv;
geocodeAddress.geocode(argv.address,(errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    debugger;
    weather.weatherA(results.lat,results.lon,(errorMessage,wResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`The current temperature is ${wResults.temperature} and it feels like ${wResults.apparentTemperature} in the location ${results.display_name}`);
      }
    })
  }
});
