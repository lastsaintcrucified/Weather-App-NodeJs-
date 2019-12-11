console.log('starting app...');

setTimeout(() => {
  console.log('inside of callBack');
},2000);

setTimeout(() => {
  console.log('second timeout function');
},0);

setTimeout(() => {
  console.log('Third timeout function');
},0);
console.log('finishing app');
