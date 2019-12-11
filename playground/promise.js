var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Must be numbers');
    }
  });
};
asyncAdd(5,7).then((res) => {
  console.log(`result : ${res}`);
  return asyncAdd(res,33);
}).then((res) => {
  console.log(`the result should be ${res}`);
}).catch((errorMessage) => {
  console.log(errorMessage);
});




// var asyncAdd = (a,b) => {
//   return new Promise((resolve, reject) => {
//     if(typeof a === 'number' && typeof b === 'number'){
//       resolve(a+b);
//     }else{
//       reject('Must be numbers');
//     }
//   });
// };
// const yargs = require('yargs');
// var argv = yargs
// .options({
//   a:{
//     demand:true,
//     describe:'First number to be included',
//     alias:'num1'
//   },
//   b:{
//     demand:true,
//     describe:'second number to be included',
//     alias:'num2'
//   }
// })
// .help()
// .alias('help','h')
// .argv;
// asyncAdd(argv.num1,argv.num2).then((result) => {
//   console.log('The result is: ', result);
// },(errorMessage) => {
//   console.log(errorMessage);
// });
//
//
//
//
// var somePromise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked!');
//     reject('Error happened!');
//   },2000);
// });
// somePromise.then((message) => {
//   console.log('Success:',message);
// },(errorMessage) => {
//   console.log('Error:',errorMessage);
// });
